import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.scss']
})
export class ManageuserComponent implements OnInit {
userList:any= []; 
item : any;
yourNewData:any = [];
email:any;
index:any;
  
constructor() {}

onDelete(email:any,index:any){
//debugger
  if(confirm("Are you want to delete")==true){
  for(var i=0; i<this.userList.length; i++) 
    { 
        if(this.userList[i].email !== email)
        {
            this.yourNewData.push(this.userList[i]);
        }
        localStorage.setItem("User", JSON.stringify(this.yourNewData));
        console.log('localStorage::', localStorage);
        window.location.reload(); // reload the current page
      
    }
  }else{
    window.location.reload();// reload the current page
  } 
}

ngOnInit(): void {
  this.userList = JSON.parse(localStorage.getItem('User') as any).filter((x: { IsActive: boolean; })=>x.IsActive === false);

 }

}
