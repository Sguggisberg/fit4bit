import { PayrollDto } from '../../../commons/dto/payroll-dto.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PayrollService } from 'src/app/commons/service/payroll.service';
import { CardItemService } from 'src/app/trainer/payroll/payroll-overview/card-item.service';
import { PayrollAddTrainingDto } from 'src/app/commons/dto/payroll-add-training-dto';
import { SnackbarService } from '../../../commons/service/snackbar.service';
import { NewpayrollComponent } from '../create-payroll/newpayroll.component';

@Component({
  selector: 'fit4bit-payroll-overview',
  templateUrl: './payroll-overview.component.html',
  styleUrls: ['./payroll-overview.component.scss'],
})
export class PayrollOverviewComponent implements OnInit {
  public payrollList: PayrollDto[] = [];
  public filteredList: PayrollDto[] = [];
  public filterOffeneTraining = false;
  public selectedPayroll: PayrollDto;
  public showPayrollList: boolean;
  public showNewPayrollForm: boolean;
  public title: string;
  public lengthOfOpenPayrolls: number;
  public formInOverlayValid: boolean;
  public showFilter = false;

  @ViewChild(NewpayrollComponent) newpayrollComponent: NewpayrollComponent;

  constructor(
    private payrollService: PayrollService,
    private cardItemService: CardItemService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.initData();
    this.filteredList = this.payrollList;
  }

  private initData(): void {
    this.payrollService.getAll$().subscribe((payrollList) => {
      this.payrollList = payrollList;
      this.filteredList = payrollList;
      this.lengthOfOpenPayrolls = payrollList.filter(
        (value) => value.billState === 'OFFEN'
      ).length;
    });
  }

  public resetOverlay(): void {
    this.showPayrollList = false;
    this.showNewPayrollForm = false;
  }

  public loadItem(payroll: PayrollDto): void {
    this.selectedPayroll = payroll;
    this.showPayrollList = true;
    this.title = `${payroll.month}  ${payroll.year}`;
  }

  public loadNewPayrollForm(): void {
    this.title = 'Neues Stundenblatt anlegen';
    this.showNewPayrollForm = true;
  }

  public addTrainingsToPayroll(): void {
    let listOfId: number[] = [];
    this.cardItemService.clickedElements.forEach((training) =>
      listOfId.push(training.id!)
    );

    let payrollToAddTrainings: PayrollAddTrainingDto = {
      id: this.selectedPayroll.id!,
      trainingIds: listOfId,
    };
    this.payrollService.addTrainings$(payrollToAddTrainings).subscribe(
      () => {
        this.snackbarService.sendDataSaveOk();
      },
      () => {
        this.snackbarService.sendStandardNok();
      }
    );

    this.showPayrollList = false;
    this.cardItemService.clear();
  }

  public submitPayroll(payroll: PayrollDto): void {
    this.payrollService.submitPayroll$(payroll).subscribe(
      () => {
        this.snackbarService.sendDataSaveOk();
      },
      () => {
        this.snackbarService.sendStandardNok();
      }
    );
    this.initData();
  }

  public stateFiler(): void {
    this.filterOffeneTraining = !this.filterOffeneTraining;
    if (this.filterOffeneTraining) {
      this.filteredList = [];
      this.payrollList.forEach((value) => {
        if (value.billState === 'OFFEN') {
          this.filteredList.push(value);
        }
      });
    } else this.filteredList = this.payrollList;
  }

  public checkValidation($event: boolean) {
    this.formInOverlayValid = $event.valueOf();
  }

  public createPayroll(): void {
    this.newpayrollComponent.create();
    this.resetOverlay();
  }
}
