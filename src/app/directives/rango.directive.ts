import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appRango]', 
  providers: [{provide: NG_VALIDATORS, useExisting: RangoDirective, multi: true}]
})
export class RangoDirective implements Validator{

  @Input('appRango') modelos: number[];
  constructor() { }

  validate(control: AbstractControl): {[key: string]: any}{
    return this.modelos ? this.rangoValidator(this.modelos)(control): null;
  }

  rangoValidator(modelos: number[]): ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} | null=>{
      let desde = modelos[0];
      let hasta = modelos[modelos.length]
      console.log(desde, hasta);
      const forbid= hasta < desde;
      return forbid ? { 'forbidModels': {value: modelos}}: null;
    };
  }
  

}
