import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { HomeComponent }   from './home/home.component';
import { ProjectsComponent }  from './projects/projects.component';
import { ResumeComponent }   from './resume/resume.component';
import { AboutComponent }  from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './angular-material.module';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { MatSnackBarModule, MatSnackBar, MatDialog, MatDialogModule } from '@angular/material';
import { ModalComponent } from './dialog-modal/dialog-modal';
import { RegisterComponent } from './register/register.component';
import { LoginNavigationComponent } from './login-navigation/login-navigation.component';
import { ComponentsModule } from './components/components.module';
//import { DialogModal, DialogModalDialog } from './dialog-modal/dialog-modal';

export function getToken(): string {
  return localStorage.getItem('id_token');
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    MatSnackBarModule,
    MatDialogModule,
    ComponentsModule,
    JwtModule.forRoot({
      config: {
          tokenGetter: getToken,
          whitelistedDomains: ['localhost:4200']
      }
    })
    

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    //HttpClientInMemoryWebApiModule.forRoot(
    //  InMemoryDataService, { dataEncapsulation: false }
    //)
  ],
  providers: [ AuthGuardService, AuthService ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ResumeComponent,
    AboutComponent,
    LoginComponent,
    NavigationComponent,
    ModalComponent,
    RegisterComponent,
    LoginNavigationComponent
    //DialogModal,
    //DialogModalDialog
  ],
  entryComponents: [ ModalComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }