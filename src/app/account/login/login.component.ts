import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Declaration//
  loginForm: FormGroup;
  loginDetail: any;
  userList:any[]=[];
  errorMessage: boolean = false;

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      email:new FormControl(''),
      password:new FormControl(''),
    })
  }

  ngOnInit(): void {
 
    this.loginForm.valueChanges.subscribe(value => {
      this.errorMessage = false;
    })
  }

  onSubmit(formValue: FormGroup) {
    // debugger

    localStorage.removeItem('userList');
    this.loginDetail = {
      email: formValue.value.email,
      password: formValue.value.password
     }
    if (this.checkArrayExist(JSON.parse(localStorage.getItem('User') as string))) {
      const user = JSON.parse(localStorage.getItem('User') as string).filter((x: { email: any; password: any; }) =>
        x.email === this.loginDetail.email && x.password === this.loginDetail.password)

      if (this.checkArrayExist(user)) {
        this.userList = JSON.parse(localStorage.getItem('User') as any);
        this.userList.find((x: { email: any; }) => x.email == formValue.value.email).IsActive = true; 
        localStorage.removeItem('User');
        localStorage.setItem('User', JSON.stringify(this.userList));
        alert("Login Successfull");
        this.router.navigate(['/','dashboard','manageuser']);
      } else {
        this.errorMessage = true;
      }
    } else {
      this.errorMessage = true; 
    }
}
  checkArrayExist(arr: any) {
    if (typeof arr != "undefined" && arr != null && arr.length != null && arr.length > 0) {
      return true;
    }
    return false;
  }
  

  
}
