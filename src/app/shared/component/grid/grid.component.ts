import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { GridColumn, GridConfig } from '../../interface/grid-column';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html'
})
export class GridComponent implements OnInit {

  @Input() config!: GridConfig;
  @Input() data: any[] = [];
  @Input() totalRecords = 0;
  @Input() loading = false;

  @Output() pageChange = new EventEmitter<PageEvent>();
  @Output() sortChange = new EventEmitter<Sort>();
  @Output() actionClick = new EventEmitter<{ action: string; row: any }>();

  displayedColumns: string[] = [];

  ngOnInit() {
    this.displayedColumns = this.config.columns.map(c => c.key);

    if (this.config.actions?.length) {
      this.displayedColumns.push('actions');
    }
  }

  onPageChange(event: PageEvent) {
    this.pageChange.emit(event);
  }

  onSortChange(sort: any) {
    this.sortChange.emit(sort);
  }

  onActionClick(action: string, row: any) {
    this.actionClick.emit({ action, row });
  }

  onRowActionClick(col: any) {}
}
