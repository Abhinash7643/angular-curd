import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { FormsModule } from '@angular/forms';
import { AddstudentComponent } from './addstudent/addstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentlistComponent,
    AboutComponent,
    UpdateStudentComponent,
    AddstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
