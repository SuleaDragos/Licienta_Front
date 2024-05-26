import { FormControl } from "@angular/forms";
import {AbstractControl, ValidatorFn} from '@angular/forms';


export function validateCode(c: FormControl) {
    let REGEX_CAPITAL = /[A-Z][A-Z][A-Z]/;
    return (REGEX_CAPITAL.test(c.value) || c.value.length == 0  ? null : {validateCode : true});  
};

export function validateNumber(c: FormControl) {
    let REGEX_NUMBERS = /[0-9]+/;
    return (REGEX_NUMBERS.test(c.value) && (c.value.length == 2 || c.value.length == 3 || c.value.length == 6) ? null : {validateNumber : true});
  };



