import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student';
import { StudenrlistService } from '../studenrlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  students: Observable<Student[]>;
  constructor(
    private studentService : StudenrlistService,
    private router: Router
  ) { }

  ngOnInit() {
    this.students = this.studentService.getAllStudents();
    console.log('oninit called')
  }

  reloadData() {
    this.students = this.studentService.getAllStudents();
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateStudent(id: number){
    this.router.navigate(['updateStudent', id]);
  }

  addStudent(){
    this.router.navigate(['add-student']);
  }

}
