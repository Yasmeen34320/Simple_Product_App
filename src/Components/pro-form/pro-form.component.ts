import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pro-form',
  imports: [ReactiveFormsModule],
  templateUrl: './pro-form.component.html',
  styleUrl: './pro-form.component.css'
})
export class ProFormComponent {
  @Output() sendingtoApp = new EventEmitter()

  myRegForm = new FormGroup({
    // name: new FormControl("hamada", Validators.required),
    // age: new FormControl(26, [Validators.min(10), Validators.max(50)])
    productName: new FormControl(null, Validators.required),
    url:new FormControl(null, [Validators.required, Validators.pattern(/^.+\.(jpg|png)$/i)]),
    rating:new FormControl(null , [Validators.min(1) ,Validators.required, Validators.max(5),  Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/) ]// Ensure it's a number (optional decimal up to 2 digits)
  ),
    desc: new FormControl(null, Validators.required), // Added this form control

  })
  // get ageValid(
  //   return this.myRegForm.controls.age.valid
  // }
  get FormValid(){
    return this.myRegForm.valid;
  }
  get ImageValid()
  {
    return this.myRegForm.controls.url.valid || this.myRegForm.controls.url.value===null ;

  }
  get RatingValid()
  {
    return this.myRegForm.controls.rating.valid || this.myRegForm.controls.rating.value===null;

  }
  get DescValid()
  {
    return this.myRegForm.controls.desc.valid || this.myRegForm.controls.desc.value===null
  }
  get NameValid()
  {
    return this.myRegForm.controls.productName.valid || this.myRegForm.controls.productName.value===null
  }
  sendData() {
console.log(this.myRegForm.value)
if (this.myRegForm.valid) {

this.sendingtoApp.emit(this.myRegForm.value);
window.alert('Product added successfully!');
this.myRegForm.reset();

  } else {
    window.alert('Please fill in all required fields correctly.');
  }

}

}
