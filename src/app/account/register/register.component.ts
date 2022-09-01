import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { IregisterModel } from '../modal/registerModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  userRegister: IregisterModel | undefined;
  register:any[]=[];
  userId: number = 0;
  message: boolean = false;

  constructor(private router:Router) {
    this.registerForm = new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl(''),
      cpassword:new FormControl(''),
    })
  }
  
  ngOnInit(): void {
    //debugger
    this.registerForm.valueChanges.subscribe(value => {
        this.message = false;
      })
  }

 onSubmit(formValue:FormGroup){
  debugger
  if (this.checkArrayExist(JSON.parse(localStorage.getItem('User')as any))) {
    this.userId = JSON.parse(localStorage.getItem('User')as any)[JSON.parse(localStorage.getItem('User')as any).length - 1].Id;
  }
  this.userRegister ={ 
    Id: this.userId + 1,
    name : formValue.value.name,
    email: formValue.value.email,
    password :formValue.value.password,
    IsActive: false
}

if (!this.checkUserExist(formValue)) {
  if (this.checkArrayExist(JSON.parse(localStorage.getItem('User') as any))) {
    this.register = JSON.parse(localStorage.getItem('User')as any);
    this.register.push(this.userRegister);
  }
  else {
    this.register.push(this.userRegister);
  }
  localStorage.setItem('User', JSON.stringify(this.register));
  this.registerForm.reset();
  this.register = [];
  }
  else {
    this.message = true;
  }
}
                      
  checkUserExist(data: FormGroup) {
    if (this.checkArrayExist(JSON.parse(localStorage.getItem('User')as any))) {
      const userExist = JSON.parse(localStorage.getItem('User')as any).filter((x: { email: any; }) => x.email === data.value.email).length > 0;
      return userExist === true ? true : false;
    }
    return false;
  }

  checkArrayExist(arr: any) {
    if (typeof arr != "undefined" && arr != null && arr.length != null && arr.length > 0) {
      return true;
    }
    return false;
  }

}
