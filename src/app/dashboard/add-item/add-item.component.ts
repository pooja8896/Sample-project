import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  title?: string;
  closeBtnName?: string;
  itemform;
  numberOfItems = 0;
  list: any[] = [];

  public event: EventEmitter<any> = new EventEmitter();
  
  constructor(public bsModalRef: BsModalRef,private formBuilder: FormBuilder) { 
    this.itemform = this.formBuilder.group({
      name: "",
      status:"",
      date:"",
      })
  }

  ngOnInit(): void { 
  }


  saveToList(form) {
  this.triggerEvent(form.value);
  this.bsModalRef.hide();
 }

  triggerEvent(item: string) {
    this.event.emit({ data: item , res:''});
  }
}
