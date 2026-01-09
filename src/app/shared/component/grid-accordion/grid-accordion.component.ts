import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-grid-accordion',
    templateUrl: './grid-accordion.component.html',
    styleUrls: ['./grid-accordion.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class GridAccordionComponent implements OnInit {
    @Input() dataSource: any[] = [];
    @Input() tableConfig: any = {};

    expandedElement: any | null = null;

    displayedColumns: any;
    innerDisplayedColumns: any;

    @ViewChild(MatSort) sort!: MatSort;

    gridDataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

    ngOnInit(): void {
        this.displayedColumns = this.tableConfig.mainColumns.map((c: any) => c.key);
        this.innerDisplayedColumns = this.tableConfig.innerColumns.map((c: any) => c.key);
        this.gridDataSource = new MatTableDataSource(this.dataSource);
    }

    gridRowSelected(row: any) {
        // alert('Row selected: ' + JSON.stringify(row));
    }
}
