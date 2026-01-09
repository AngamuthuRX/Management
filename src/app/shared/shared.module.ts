import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './component/grid/grid.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { GridAccordionComponent } from './component/grid-accordion/grid-accordion.component';
import { TaskBoardComponent } from './component/task-board/task-board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    GridComponent,
    GridAccordionComponent,
    TaskBoardComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    DragDropModule,
    ReactiveFormsModule,
  ],
  exports: [
    GridComponent,
    GridAccordionComponent,
    TaskBoardComponent
  ]
})
export class SharedModule { }
