import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StudentComponent } from './student/student.component';
import { ReactiveFormInputComponent } from './reactive-form-input/reactive-form-input.component';
import { XLsheetUploadComponent } from './xlsheet-upload/xlsheet-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ReactiveFormInputComponent,
    XLsheetUploadComponent,

  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
