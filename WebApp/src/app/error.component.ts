// show-errors.component.ts
import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
 selector: 'show-errors',
 template: `
    <div *ngIf="shouldShowErrors()">
      <span style="color: red" *ngFor="let error of listOfErrors()">
        * {{error}}
      </span>
    </div>
 `,
})
export class ShowErrorsComponent {

 private static readonly errorMessages = {
   'required': () => 'Esse campo é obrigatório',
   'minlength': (params) => 'O número mínimo de caracteres é ' + params.requiredLength,
   'maxlength': (params) => 'O número máximo permitido de caracteres é ' + params.requiredLength,
   'pattern': (params) => 'O padrão requerido é: ' + params.requiredPattern
 };

 @Input()
 private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean {
    return this.control && this.control.errors && this.control.dirty;
 }

 listOfErrors(): string[] {
   return Object.keys(this.control.errors)
     .map(field => this.getMessage(field, this.control.errors[field]));
 }

 private getMessage(type: string, params: any) {
   return ShowErrorsComponent.errorMessages[type](params);
 }

}
