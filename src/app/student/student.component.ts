import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  _url = 'http://localhost:8080';
  userfile: any;
  message;
  file;
  visibleNote = false;
  percentDone: number;
  uploadSuccess: boolean;
  disableSumbit=true;
  displayNote=false;
  constructor( private http: HttpClient, ) { }
  ngOnInit() {
  }

  onselectednewFile(event) {
    this.file = event.target.files[0];
    this.disableSumbit=false;
  }
  uploadAndProgress() {
    const formData = new FormData();
    formData.append('file', this.file);
    console.log(formData);
    this.http.post('http://localhost:8080/uploadmyfile', formData)
      .subscribe((event:any) => {
        console.log(event);
        if(event.error==false){
          this.message=true;
          setTimeout(() => {
            this.message=false;
          },2000);
        }
    });
  }

}
