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

import { NgModule } from '@angular/core';    
import { Routes, RouterModule } from '@angular/router';    
import { DashboardComponent } from './dashboard/dashboard.component';    
import { LoginComponent } from './login/login.component';    
import { RegisterComponent } from './register/register.component';  
import { HomeComponent }   from './home/home.component';
import { ProjectsComponent }      from './projects/projects.component';
import { ResumeComponent }   from './resume/resume.component';
import { AboutComponent }      from './about/about.component';  
    
    
export const routes: Routes = [    
  {    
    path: '',    
    redirectTo: 'login',    
    pathMatch: 'full',    
  },    
  {    
    path: 'login',    
    component: LoginComponent,    
    data: {    
      title: 'Login Page'    
    }    
  },    
  {    
    path: 'Dashboard',    
    component: DashboardComponent,    
    data: {    
      title: 'Dashboard Page'    
    }    
  },    
  {    
    path: 'AddUser',    
    component: RegisterComponent,    
    data: {    
      title: 'Add User Page'    
    }    
  },   
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'about', component: AboutComponent } 
];    
    
@NgModule({    
  imports: [RouterModule.forRoot(routes)],    
  exports: [RouterModule]    
})    
export class AppRoutingModule { }  