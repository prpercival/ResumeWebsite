import { NgModule }             from '@angular/core';
import { RouterModule, Routes, CanActivate  } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { ProjectsComponent }      from './projects/projects.component';
import { ResumeComponent }   from './resume/resume.component';
import { AboutComponent }      from './about/about.component';
import { LoginComponent }      from './login/login.component';
import { NavigationComponent }      from './navigation/navigation.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { LoginNavigationComponent } from './login-navigation/login-navigation.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  //{ path: '', component: LoginNavigationComponent },
  { 
    path: '',
    component: NavigationComponent,
    //canActivate: [AuthGuard],
    //canActivateChild: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'about', component: AboutComponent },
      //{ path: 'admin', component: AdminComponent }
    ]
   },
   { 
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    //canActivateChild: [AuthGuard],
   },
   {
     path: 'login',
     component: LoginNavigationComponent,
     children:[
       { path: '', component: LoginComponent },
       { path: 'register', component: RegisterComponent }
     ]
   },
   { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes, { useHash: true }),
    RouterModule.forChild(routes)
   ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
