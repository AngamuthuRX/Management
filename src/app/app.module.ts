import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { ProjectsModule } from './features/projects/projects.module';
import { ClientsModule } from './features/clients/clients.module';
import { CalendarModule } from './features/calendar/calendar.module';
import { UsersModule } from './features/users/users.module';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SharedModule,
    LayoutModule,
    DashboardModule,
    ProjectsModule,
    ClientsModule,
    CalendarModule,
    UsersModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
