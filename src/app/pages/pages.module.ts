import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { LoginModule } from "./login/login.module";
import { StudentsComponent } from './students/students.component';
import { ClassesComponent } from './classes/classes.component';
import { AddclassComponent } from './addclass/addclass.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddschoolComponent } from './addschool/addschool.component';
import { SchoolsComponent } from './schools/schools.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdddeviceComponent } from './adddevice/adddevice.component';
import { NbDatepickerModule } from '@nebular/theme';



const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
    LoginModule,
    ReactiveFormsModule,
    ToastrModule,
    NbDatepickerModule,
    FormsModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    StudentsComponent,
    ClassesComponent,
    AddclassComponent,
    AddstudentComponent,
    AddschoolComponent,
    SchoolsComponent,
    AdddeviceComponent
  ],
})
export class PagesModule {
}
