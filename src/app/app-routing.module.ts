import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GotoSelectComponent } from './goto-select/goto-select.component';
import { RestaurentDashComponent } from './restaurent-dash/restaurent-dash.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'signin', pathMatch: 'full'
  },
  {
    path: 'signin', component: SigninComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'restaurent-dash', component: RestaurentDashComponent
  },
  {
    path: 'gotoselect', component: GotoSelectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }