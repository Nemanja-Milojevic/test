import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ClassesComponent } from './classes/classes.component';
import { AddclassComponent } from './addclass/addclass.component';
import { SchoolsComponent } from './schools/schools.component';
import { AddschoolComponent } from './addschool/addschool.component';
import { AdddeviceComponent } from './adddevice/adddevice.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'students',
      component: StudentsComponent,
    },
    {
      path: 'addstudent',
      component: AddstudentComponent,
    },
    {
      path: 'classes',
      component: ClassesComponent,
    },
    {
      path: 'addclass',
      component: AddclassComponent,
    },
    {
      path: 'schools',
      component: SchoolsComponent,
    },
    {
      path: 'addschool',
      component: AddschoolComponent,
    },
    {
      path: 'adddevice',
      component: AdddeviceComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
