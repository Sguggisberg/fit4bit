import { PayrollService } from '../../../commons/service/payroll.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fit4bit-newpayroll',
  templateUrl: './newpayroll.component.html',
  styleUrls: ['./newpayroll.component.scss'],
})
export class NewpayrollComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private payrollService: PayrollService) {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      month: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
    });
  }

  create() {
    const payroll = this.profileForm.value;
    this.payrollService.create$(payroll).subscribe();
  }
}
