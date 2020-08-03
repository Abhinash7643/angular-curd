import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudenrlistService } from '../studenrlist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentlistComponent } from '../studentlist/studentlist.component';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id: number;
  student: Student;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudenrlistService) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    
    this.studentService.getStudent(this.id)
      .subscribe(data => {
        console.log(data)
        this.student = data;
      }, error => console.log(error));
  }
  
  updateEmployee() {
    this.student.id = this.id;
    this.studentService.updateStudent(this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gotoList();
  }

  onSubmit(){ 
      this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/getAllStudent']);
  }
}


