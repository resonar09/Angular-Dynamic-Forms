import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styles: [
    `
    .error { color: red; }
    .form-control.ng-invalid.ng-touched{
      border-color: #ff2118;
      outline: 0;
      outline-color: initial;
      outline-style: initial;
      outline-width: 0px;
      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69,.25);
    }
    `
  ]
})
export class DynamicFormComponent implements OnInit {
  @Input() dataObject;
  form: FormGroup;
  objectProps;
  objectValidationCustom =[];


  constructor() {
  }

  ngOnInit() {
    // remap the API to be suitable for iterating over it
    this.objectProps =
      Object.keys(this.dataObject)
        .map(prop => {
          return Object.assign({}, { key: prop }, this.dataObject[prop]);
        });
   
    console.log(this.objectProps);
    // setup the form
    const formGroup = {};
    for (let prop of Object.keys(this.dataObject)) {
      formGroup[prop] = new FormControl(this.dataObject[prop].value || '', this.mapValidators(this.dataObject[prop].validation));
    }

    this.form = new FormGroup(formGroup);
  }

  private mapValidators(validators) {
    const formValidators = [];

    if (validators) {
      for (const validation of Object.keys(validators)) {
        if (validation === 'required') {
          formValidators.push(Validators.required);
        } else if (validation === 'min') {
          formValidators.push(Validators.min(validators[validation]));
        } else if (validation === 'max') {
          formValidators.push(Validators.max(validators[validation]));
        } else if (validation === 'pattern') {
          formValidators.push(Validators.pattern(validators[validation]));
/*           for (const pattern of Object.keys(validators.patterns)) {
            formValidators.push(Validators.pattern(validators.patterns[pattern].pattern));
            */
        } else if (validation === 'customs') {
          console.log(validators.customs);
          
          for (const custom of Object.keys(validators.customs)) {
            //this.objectValidationCustom.push(validators.customs[custom])
            //console.log(validators.customs[custom]);
            formValidators.push(validators.customs[custom].function);
          }
        }
      }
    }
    return formValidators;
  }

  onSubmit(form) {
    console.log(form);
  }
}
