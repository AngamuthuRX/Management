import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectSummaryComponent } from './project-summary/project-summary.component';
import { ProjectRoutingModule } from './project-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProjectSummaryComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class ProjectsModule { }
