import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForm';

  

   loginform = new FormGroup({
     fullname: new FormControl <string> ('', Validators.required),
     age: new FormControl <number | string>('', Validators.required),
     email: new FormControl<string>('', Validators.required),
     phonenumber: new FormControl<number|string>('', Validators.required),
  })

  get fullname(){
    return this.loginform.get('fullname')
  }
  get age(){
    return this.loginform.get('age')
  }
  get email(){
    return this.loginform.get('email')
  }
  get phonenumber(){
    return this.loginform.get('phonenumber')
  }
  loginuser(){
    console.log(this.loginform.value)
  }
}
