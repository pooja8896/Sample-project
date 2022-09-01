import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DocumentModal } from './modal/document-modal';

@Component({
  selector: 'app-managedocument',
  templateUrl: './managedocument.component.html',
  styleUrls: ['./managedocument.component.scss']
})
export class ManagedocumentComponent implements OnInit {
uploadData: DocumentModal;
urls:DocumentModal[]=[]
msg="";

constructor(private http:HttpClientModule) {}

ngOnInit(): void {
  // debugger
  if (this.checkArrayExist(JSON.parse(localStorage.getItem('documentUpload')))) {
    this.urls = JSON.parse(localStorage.getItem('documentUpload')).filter((x: { IsFileDeleted: boolean; }) => x.IsFileDeleted === false);
    }
}

selectFile(event:any) { 
  // debugger
  if (event.target.files && event.target.files[0]) {
    if (event.target.files.length == 0){
      return event.target.files.length;
    }  
    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
    this.msg = "Only images are supported.";
    return;
  }
  var reader:FileReader = new FileReader();
  reader.onloadend = (e) => {
  this.uploadData = {
    FileName: event.target.files[0].name,
    FilePath: reader.result as string,
    IsFileDeleted: false,
    FileType: event.target.files[0].type
  }
  this.urls.push(this.uploadData);
  localStorage.setItem('documentUpload', JSON.stringify(this.urls));
  this.ngOnInit();
  }
  reader.readAsDataURL(event.target.files[0]);
      }
      // console.log(localStorage.getItem('documentUpload'));
  }
 
  checkArrayExist(arr: any) {
    if (typeof arr != "undefined" && arr != null && arr.length != null && arr.length > 0) {
      return true;
    }
    return false;
  }
 
}


