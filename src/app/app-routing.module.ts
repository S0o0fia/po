import { PrintRequestComponent } from './Components/PostGradutes/print-request/print-request.component';
import { PostGraduteInfoComponent } from './Components/PostGradutes/PostGraduteInfo/PostGraduteInfo.component';
import { PhdRegisterComponent } from './Components/PostGradutes/phd-register/phd-register.component';
import { MasterRegisterComponent } from './Components/PostGradutes/master-register/master-register.component';
import { DiplomaRegisterComponent } from './Components/PostGradutes/diploma-register/diploma-register.component';
import { QulificationsComponent } from './Components/PostGradutes/Qulifications/Qulifications.component';
import { PostGraduteRegisterComponent } from './Components/PostGradutes/PostGraduteRegister/PostGraduteRegister.component';
import { PostGraduteLoginComponent } from './Components/PostGradutes/PostGraduteLogin/PostGraduteLogin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'PostGraduteLogin', component: PostGraduteLoginComponent },
  { path: 'PostGraduteRegister', component: PostGraduteRegisterComponent },
  { path: 'PostGraduteProfile', component: PostGraduteInfoComponent },
  { path: 'Qulifications', component: QulificationsComponent },
  { path: 'DiplomaRegister', component: DiplomaRegisterComponent },
  { path: 'MasterRegister', component: MasterRegisterComponent },
  { path: 'PhdRegister', component: PhdRegisterComponent } ,
  { path: 'PrintRequest', component: PrintRequestComponent } ,
  { path: '', redirectTo: '/PostGraduteLogin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
