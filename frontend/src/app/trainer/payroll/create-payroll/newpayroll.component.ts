import { PayrollService } from '../../../commons/service/payroll.service';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {SnackbarService} from "../../../commons/service/snackbar.service";

@Component({
  selector: 'fit4bit-newpayroll',
  templateUrl: './newpayroll.component.html',
  styleUrls: ['./newpayroll.component.scss'],
})
export class NewpayrollComponent implements OnInit {
  profileForm: FormGroup;

  @Output()
  public validEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private payrollService: PayrollService, private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      month: new FormControl('', [Validators.required, Validators.min(1), Validators.max(12)]),
      year: new FormControl('', [Validators.required, Validators.min(2022), Validators.max(2026)]),
    });
    this.profileForm.valueChanges.subscribe(() => this.validEmitter.emit(this.profileForm.valid))
  }

 public create() {
    const payroll = this.profileForm.value;
    this.payrollService.create$(payroll).subscribe(()=>this.snackbarService.sendDataSaveOk(),()=> this.snackbarService.sendStandardNok());
  }
}
