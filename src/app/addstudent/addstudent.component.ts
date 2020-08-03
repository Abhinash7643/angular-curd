import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudenrlistService } from '../studenrlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  student: Student = new Student();
  submitted = false;

  constructor(private studentService: StudenrlistService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.student = new Student();
  }

  save() {
    this.studentService.addStudent(this.student)
      .subscribe(data => console.log(data), error => console.log(error));
      this.student = new Student();
      this.gotoList();
  }

  onSubmit() {
    // this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/getAllStudent']);
  }

}
