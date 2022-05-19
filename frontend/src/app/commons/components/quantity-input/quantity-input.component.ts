import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'fit4bit-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: QuantityInputComponent,
    },
  ],
})
export class QuantityInputComponent implements ControlValueAccessor {
  @Input()
  public increment: number;

  @Input()
  public min: number;

  @Input()
  public max: number;

  public quantity = 0;

  public touched = false;

  public disabled = false;

  public onChange = (quantity: number) => {};

  public onTouched = () => {};

  constructor() {}

  public onAdd(): void {
    if (this.quantity < this.max) {
      this.markAsTouched();
      this.quantity += this.increment;
      this.onChange(this.quantity);
    }
    this.previewCheck();
  }

  public onRemove(): void {
    if (this.quantity > this.min) {
      this.markAsTouched();
      this.quantity -= this.increment;
      this.onChange(this.quantity);
    }
    this.previewCheck();
  }

  public markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  public registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  public setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  public writeValue(quantity: number): void {
    this.quantity = quantity;
  }

  public previewCheck(): void {
    if (this.quantity < this.min || this.quantity > this.max) {
      this.quantity = 0;
    }
  }
}
