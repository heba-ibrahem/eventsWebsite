import { Directive } from '@angular/core';
import { FormGroup, Validator , NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appLocationValidator]',
  providers:[{provide:NG_VALIDATORS, useExisting:LocationValidatorDirective, multi:true}]
})
export class LocationValidatorDirective implements Validator {

  constructor() { }
  validate(fromGroup: FormGroup) :{[key:string]:any} | null{
      let addressControl= fromGroup.controls['address'];
      let cityControl= fromGroup.controls['city'];
      let countryControl= fromGroup.controls['country'];
      let onlineUrlControl= (<FormGroup>fromGroup.root).controls['onlineUrl'];

      if((addressControl&& addressControl.value && cityControl&& cityControl.value && countryControl &&countryControl.value)|| (onlineUrlControl &&onlineUrlControl.value)){
        return null ;
      }else {
        return {appLocationValidator: false}
      }
  }


}
