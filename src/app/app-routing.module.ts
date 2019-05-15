/*import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { ProjectsComponent }      from './projects/projects.component';
import { ResumeComponent }   from './resume/resume.component';
import { AboutComponent }      from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}*/

/*import { NgModule } from '@angular/core';    
import { Routes, RouterModule } from '@angular/router';    
import { DashboardComponent } from './dashboard/dashboard.component';    
import { LoginComponent } from './login/login.component';    
import { RegisterComponent } from './register/register.component';  
import { HomeComponent }   from './home/home.component';
import { ProjectsComponent }      from './projects/projects.component';
import { ResumeComponent }   from './resume/resume.component';
import { AboutComponent }      from './about/about.component';  
import { CustomersComponent } from './customers/customers.component';
import { AuthGuard } from './guards/auth-guard.service';
    
    
export const routes: Routes = [    
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'about', component: AboutComponent } 
];    
    
@NgModule({    
  imports: [RouterModule.forRoot(routes)],    
  exports: [RouterModule]    
})    
export class AppRoutingModule { }  */