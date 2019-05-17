import { NgModule }             from '@angular/core';
import { RouterModule, Routes, CanActivate  } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { ProjectsComponent }      from './projects/projects.component';
import { ResumeComponent }   from './resume/resume.component';
import { AboutComponent }      from './about/about.component';
import { LoginComponent }      from './login/login.component';
import { NavigationComponent }      from './navigation/navigation.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { 
    path: 'navigation',
    component: NavigationComponent,
    canActivate: [AuthGuard],
    //canActivateChild: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'about', component: AboutComponent },
    ]
   },
   { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
   ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
