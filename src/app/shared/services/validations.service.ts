import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})


export class ValidationsService {

  constructor() { }

  public isValid(form: FormGroup, field:string): boolean | null{

    return form.controls[field].errors
      && form.controls[field].touched
  }

  public validLengthDescription(form: FormControl): ValidationErrors | null{
    const  regExpLength = /^.{51,}$/;
    if(regExpLength.test(form.value)) return null
    return{
      length: 'Must be at least 50 characters'
    }
  }
  public validLengthName(form: FormControl): ValidationErrors | null{
    const  regExpLength = /^.{4,}$/;
    if(regExpLength.test(form.value)) return null
    return{
      length: 'Must be at least 50 characters'
    }
  }

  public IDValidator (form: FormControl):ValidationErrors | null{
    const regExpIdCode  = /^[A-Za-z]{3}\d{3}$/;
    const idCodeValidator = regExpIdCode.test(form.value)
    if(idCodeValidator) return null
    return{
      idCode: 'Invalid ID code'
    }
  }

}
