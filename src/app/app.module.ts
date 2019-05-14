import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { HomeComponent }   from './home/home.component';
import { ProjectsComponent }  from './projects/projects.component';
import { ResumeComponent }   from './resume/resume.component';
import { AboutComponent }  from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'; 

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    //HttpClientInMemoryWebApiModule.forRoot(
    //  InMemoryDataService, { dataEncapsulation: false }
    //)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ResumeComponent,
    AboutComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }