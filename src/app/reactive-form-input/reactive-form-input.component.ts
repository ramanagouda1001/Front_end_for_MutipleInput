import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reactive-form-input',
  templateUrl: './reactive-form-input.component.html',
  styleUrls: ['./reactive-form-input.component.css']
})
export class ReactiveFormInputComponent implements OnInit {

  message;
  disableSubmit;
  fileSize = 0;
  FilesArray: string[] = [];
  addFile: FormGroup;
  fileSizeMessage: boolean;
  constructor(private fb: FormBuilder, private http: HttpClient) {

   }
  display3 = 'none';
  ngOnInit() {
    this.addFile = this.fb.group({
      filess: this.fb.array([
        this.getFiless()
      ])
    });
  }

   // files
   getFiless() {
    return this.fb.control(null, [
      Validators.required
    ]);
  }

  get filess(): FormArray {
   return this.addFile.get('filess') as FormArray;
  }

  addFiless() {
    this.filess.push(this.getFiless());
  }

  removeFiless(i: number) {
    this.filess.removeAt(i);
    if(this.FilesArray[i]!=null){
         
    console.log("the size of file deletitng=" + this.FilesArray[i]['size']);
    console.log("the current size before deleting = " + this.fileSize);
    this.fileSize = this.fileSize -this.FilesArray[i]['size'];
    console.log("the current size after deleting = " + this.fileSize);
    if (20971520 > this.fileSize) {
      this.fileSizeMessage = false;
      this.disableSubmit=false;
    } else {
      this.fileSizeMessage = true;
      this.disableSubmit=true;
    }
    this.FilesArray.splice(i,1);
  }
  }
  disablePopUp() {
    this.display3 = 'block';
  }
  closeModal() {
    this.display3 = 'none';
   }
   onselectednewFile(event) {
    this.fileSize = this.fileSize + event.target.files[0].size;
    console.log("the current size="+ this.fileSize);
    if (20971520 > this.fileSize) {
      this.fileSizeMessage = false;
      this.disableSubmit=false;
    } else {
      this.fileSizeMessage = true;
      this.disableSubmit=true;
    }
    this.FilesArray.push(event.target.files[0]);
   }

   addFiles() {
    const formData = new FormData();
    for (let i = 0; i < this.FilesArray.length; i++) {
      formData.append('files', this.FilesArray[i]);
      }

    this.http.post('http://localhost:8080/mutipleFileupload', formData)
        .subscribe((event: any) => {
          this.FilesArray = [];
          this.fileSize=0;
          if (event.error === false) {
            this.message = true;
            setTimeout(() => {
              const control = <FormArray>this.addFile.controls['filess'];
              for(let i = control.length-1; i > 0; i--) {
                control.removeAt(i);
              }
            this.message = false;
            this.addFile.reset();
            this.closeModal();
          }, 2000);
          }
    });
   }
}
