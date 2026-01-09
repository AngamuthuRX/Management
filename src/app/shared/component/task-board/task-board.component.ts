import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent {
  todo: Task[] = [
    { id: '1', title: 'Research API', description: 'Check Angular 15 docs', priority: 'High' },
    { id: '1', title: 'Research API', description: 'Check Angular 15 docs', priority: 'High' },
    { id: '1', title: 'Research API', description: 'Check Angular 15 docs', priority: 'High' }
  ];
  inProgress: Task[] = [];
  active: Task[] = [
    { id: '1', title: 'Research API', description: 'Check Angular 15 docs', priority: 'High' }
  ];
  completed: Task[] = [];

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
}