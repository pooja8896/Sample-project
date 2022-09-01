import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddItemComponent } from '../add-item/add-item.component';
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {

// Variable Declaration //

  employee: any;
  empArr: any[] = [];
  activeCount:any = 0;
  inActiveCount:any = 0;
  allCount:any= 0; 
  delCount:any=0;
  //userId: number = 0;
  radioSel:any;
  radioSelected:string;
  selectedRow: Number;
  checkbox:boolean= false;
  checkboxes: boolean[];
  bsModalRef: BsModalRef;
  //on all click//
  allCheckbox = false;

//radio form data //

  form = new FormGroup({
    change: new FormControl('', Validators.required)
  });


  constructor(private modalService: BsModalService) {
    this.radioSelected = "all"
   }


  ngOnInit(): void {

    this.employee = [
      {
        name: 'Employee 1',
        status: 1,
        date: 'Wed Mar 10 2021 00:00:00',
      },
      {
        name: 'Employee 2',
        status: 0,
        date: 'Fri Oct 15 2021 00:00:00',
      },
      {
        name: 'Employee 3',
        status: 1,
        date: 'Thu Sep 23 2010 00:00:00',
      },
      {
        name: 'Employee 4',
        status: 1,
        date: 'Fri May 10 2002 00:00:00',
      },
      {
        name: 'Employee 5',
        status: 0,
        date: 'Wed Mar 10 2021 00:00:00',
      },
    ];

  // Employee //
   this.empArr = this.employee
 
  // checkbox //
  this.checkboxes = new Array(this.employee.length);
  this.checkboxes.fill(false);

  // Counting for all //
  this.allCount = this.employee.length;

  // Counting for active & inActive //
    for(let i=0; i<this.employee.length;i++){
      if(this.employee[i].status == 1){
        this.activeCount = this.activeCount+1
      }else if(this.employee[i].status == 0){
        this.inActiveCount = this.inActiveCount+1
     }
    }
  }

// Radio button (byDefault) //
  getSelectedItem(){
    this.radioSel = this.employee.find(x=>x.value === this.radioSelected) ;
  }

// function Controls //  
  get f() {
    return this.form.controls;
  }

//SelectCheckedItem
  toggleSelection(event, i) {
    this.checkboxes[i] = event.target.checked;

     // Updating delete count variable
    this.delCount = this.checkboxes.filter(selected=>selected===true).length
    console.log(this.delCount);
    
  }

// Radio data submit //
  submit() {
    console.log(this.form.value);
  }

// Table //
  changeEvent(e){
    this.getSelectedItem();
    if (e.target.value === "active") {
      this.empArr = this.employee.filter(x => x.status == 1)
    }else if (e.target.value === "Inactive") {
      this.empArr = this.employee.filter(x => x.status == 0)
    }
    else{
      this.empArr = this.employee
    }
  }

// delete //
 delete(name , status){
    const indexOfObj = this.employee.findIndex(x=>x.name == name); //get index value
    if(indexOfObj>-1){
     if (this.employee.length>0 && status === 1) {
      this.employee.splice(indexOfObj,1)
      this.activeCount = this.activeCount - 1;
     } else if (this.employee.length>0 && status === 0) {
      this.employee.splice(indexOfObj,1)
      this.inActiveCount = this.inActiveCount - 1;
     }else{
      this.employee.splice(indexOfObj,1)
      this.allCount = this.inActiveCount + this.activeCount;
     }
    }
  }
  
// Modal //
    openModalWithComponent(): void {
    const initialState: ModalOptions = {
      initialState: {
        list: [
          {"tag":'Count',"value":this.employee.length}
        ],
      title: 'Enter Your Detail'
      }
    };
    this.bsModalRef = this.modalService.show(AddItemComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.event.subscribe(res => {
    //this.employee.push(res.data)
    const name = res.data.name.trim();
    if(this.employee.length>0){
      const duplicateVal = this.employee.filter(x => x.name == name);
      if (duplicateVal.length==0) {
        this.employee.push(res.data)  
      }else{
        alert("User Already exits")
      }
    }
     
    // all count //
    this.allCount = this.activeCount+this.inActiveCount;
   
    // active & Inactive count //
    this.activeCount = this.employee.filter(empDetails=>empDetails.status == 1).length
    this.inActiveCount = this.employee.filter(empDetails=>empDetails.status == 0).length
    });

  }

//checkbox //

// All check //

checkAll(event:any){
//debugger

//console.log (event.target as HTMLInputElement);
  this.checkbox=event.target.checked;
  
  this.allCheckbox = !this.allCheckbox;   // not matched
  
  // updated for true //
  if(this.allCheckbox){
  for (let index = 0; index < this.employee.length; index++) {
    this.checkboxes[index] = true;
    }
  }

  // Updating delete count variable
  this.delCount = this.checkboxes.filter(selected=>selected === true).length
}

  
// Delete All //

 onDelete(){
  //debugger
  alert('ok');
   var atleastOneSelected = this.checkboxes.some(checkbox => checkbox === true);
   var allSelected = this.checkboxes.every(checkbox => checkbox === true);

   if (!atleastOneSelected) { 
     alert("No rows selected.")
     return;
   }

  // If select any one OR select all //
  if(allSelected || this.allCheckbox){
    for (let index = 0; index < this.employee.length; index++) {
        if (this.checkboxes[index]) {
              this.employee.splice(index, 1);
            }  
        }
      }

  // select one by one //
   for (let i = this.checkboxes.length-1; i >= 0; i--) {
     // If selected, then delete that row.
     if (this.checkboxes[i]) {
       this.employee.splice(i, 1);
     }
   }
  
   // Remove entries from checkboxes array.
   this.checkboxes = this.checkboxes.filter(checkbox => checkbox === false);
  
   // Updating delete count variable
   this.delCount = this.checkboxes.filter(selected=>selected === true).length
  }
  
}


















































































































// debugger
// console.log('index value');
// const indexVal = this.employee.findIndex(x=>{return x.name;});
// if (this.employee.indexOf(indexVal) === -1) this.employee.push(indexVal);
// console.log(indexVal);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//var result = this.employee.map(a=> {return a.name;});

///////////////////////////////////////////////////////

  // user exits //??
  // this.employee= this.employee.filter((x: { name: any; }) => x.name === this.employee.name).length > 0;

/////////////////////////////////////////////////////////////////////////////////////////////////////

  //if (this.employee.includes(res.data) === false) this.employee.push(res.data);

///////////////////////////////////////////////////////////////////////////////////////////

//   hasDuplicates(arr) {
//     var counts = [];

//     for (var i = 0; i <= arr.length; i++) {
//         if (counts[arr[i]] === undefined) {
//             counts[arr[i]] = 1;
//         } else {
//             return true;
//         }
//     }
//     return false;
// }

      // debugger
    // if (this.hasDuplicates(this.employee)) {
    //   alert('Error: you have duplicates values !')
    // }else{
    
    // }





