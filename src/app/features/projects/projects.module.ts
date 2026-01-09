import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectSummaryComponent } from './project-summary/project-summary.component';
import { ProjectRoutingModule } from './project-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    ProjectSummaryComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatTabsModule,
    RouterModule,
    SharedModule
  ]
})
export class ProjectsModule { }
