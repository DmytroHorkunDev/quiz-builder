import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BaseDynamicControl, dynamicControlProvider, sharedDynamicControlDeps } from './base-dynamic-control';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [...sharedDynamicControlDeps, MatFormFieldModule, MatInputModule],
  viewProviders: [dynamicControlProvider],
  template: `
    <mat-form-field color="accent" appearance="outline" floatLabel="always" >
      <mat-label>{{control.config.label}}</mat-label>
      <input [formControlName]="control.controlKey" [value]="control.config.value" matInput placeholder="How you can describe...">
    </mat-form-field>
  `
})
export class DynamicInputComponent extends BaseDynamicControl {
}
