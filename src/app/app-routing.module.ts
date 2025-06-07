import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormControlComponent } from './form-control/form-control.component';
import { PersonalPageComponent } from './personal-page/personal-page.component';

const routes: Routes = [
  {
    path:'',
    component:FormControlComponent
  },
  {
    path:'info',
    component:PersonalPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
