
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class StudenrlistService {

  constructor(private http : HttpClient ) { }

  

   url :string = 'http://localhost:8085/api/getStudents';
  getAllStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.url)
    .pipe(tap(data =>
      console.log('detailsService', data)));
  } 
  
  delUrl :string = 'http://localhost:8085/api/deleteStudentById';
  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.delUrl}/${id}`);
  }

  get :string = 'http://localhost:8085/api/student';
  getStudent(id: number): Observable<any> {
    return this.http.get(`${this.get}/${id}`);
   
  }

  updateUrl :string = 'http://localhost:8085/api/student';
  updateStudent(value: any): Observable<Object> {
    return this.http.post(`${this.updateUrl}`, value);
  }

  addUrl :string = 'http://localhost:8085/api/student';
  addStudent(value: any): Observable<Object> {
    return this.http.post(`${this.addUrl}`, value);
  }
}
