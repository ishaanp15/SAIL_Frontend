import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './allComponents/register/register.component';
import { LoginComponent } from './allComponents/login/login.component';
import { Dasboard1Component } from './allComponents/dasboard1/dasboard1.component';
import { Dasboard2Component } from './allComponents/dasboard2/dasboard2.component';
import { Dasboard3Component } from './allComponents/dasboard3/dasboard3.component';
import { OperationalDirectorateComponent } from './allComponents/operational-directorate/operational-directorate.component';
import { CMOSYSTEMComponent } from './allComponents/cmosystem/cmosystem.component';
import { RawMaterialComponent } from './allComponents/raw-material/raw-material.component';
import { LoginMainComponent } from './allComponents/login-main/login-main.component';
import { HomepageComponent } from './allComponents/homepage/homepage.component';
import { UploadComponent } from './allComponents/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    Dasboard1Component,
    Dasboard2Component,
    Dasboard3Component,
    OperationalDirectorateComponent,
    CMOSYSTEMComponent,
    RawMaterialComponent,
    LoginMainComponent,
    HomepageComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
