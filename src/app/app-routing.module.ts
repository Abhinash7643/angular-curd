
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AboutComponent } from './about/about.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path:"getAllStudent", component: StudentlistComponent},
  { path: 'updateStudent/:id', component: UpdateStudentComponent },
  {path:"about", component: AboutComponent},
  {path:"", redirectTo:"getAllStudent",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
