import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { ParkingSpaceViewerComponent } from './component/parking-space-viewer/parking-space-viewer.component';
import { AdminPageComponent } from './component/admin-page/admin-page.component';

export const routes: Routes = [
  {path: 'signin', component: SignInComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'parkingspaceviewer', component: ParkingSpaceViewerComponent},
  {path: 'admin', component: AdminPageComponent},
  { path: '', redirectTo:'/signin', pathMatch:'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
