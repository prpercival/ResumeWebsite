import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { ProjectsComponent }      from './projects/projects.component';
import { ResumeComponent }   from './resume/resume.component';
import { AboutComponent }      from './about/about.component';
import { LoginComponent }      from './login/login.component';
import { NavigationComponent }      from './navigation/navigation.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navigation', component: NavigationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
