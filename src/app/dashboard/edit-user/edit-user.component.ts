import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { IregisterModel } from 'src/app/account/modal/registerModel';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})

export class EditUserComponent implements OnInit {
  //userList:any= []; 
  editUserForm: FormGroup;
  userId: number;
  userList:IregisterModel[]=[];
 

  constructor( private fb: FormBuilder,private route:ActivatedRoute,private router: Router) { 
    //this.userList =[];   //*//
    this.userId = route.snapshot.params['id']; // get id
  
    this.editUserForm = this.fb.group({
      name: ['', [Validators.required]],
     email: ['', [Validators.required, Validators.email]]
    });
    
    this.initialiseForm() 
  }

  ngOnInit(): void {
    //this.userList = JSON.parse(localStorage.getItem('User') as any).filter((x: { IsActive: boolean; })=>x.IsActive === false);  
    //console.log("user id is ",this.route.snapshot.paramMap.get('id'));  
  }

  save(formValue:FormGroup){
    const userLogin = JSON.parse(localStorage.getItem('User')as any).filter((x: { email: string; }) => x.email === formValue.value.email)
      if (userLogin.length > 0) {
        let itemIndex = JSON.parse(localStorage.getItem('User')as any).findIndex((x: { email: string; }) => x.email === formValue.value.email)
        this.userList = JSON.parse(localStorage.getItem('User')as any);
        this.userList[itemIndex].name = formValue.value.name;
        this.userList[itemIndex].email = formValue.value.email;
        localStorage.setItem('User', JSON.stringify(this.userList));
        this.editUserForm.reset();
        this.userList = [];
        this.router.navigate(['/','dashboard','manageuser']);
  }
}

initialiseForm() {
  // debugger
  if (this.checkArrayExist(JSON.parse(localStorage.getItem('User')as any))) {
    const userLogin = JSON.parse(localStorage.getItem('User')as any).filter((x: { Id: number; }) => x.Id === Number(this.userId))
    if (userLogin.length > 0) {
      this.editUserForm.patchValue(userLogin[0]);
    }
  }
}

checkArrayExist(arr: any) {
  if (typeof arr != "undefined" && arr != null && arr.length != null && arr.length > 0) {
    return true;
  }
  return false;
}

}