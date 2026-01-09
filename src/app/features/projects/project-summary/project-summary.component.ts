import { Component, Type } from '@angular/core';
import { GridConfig } from 'src/app/shared/interface/grid-column';

@Component({
    selector: 'app-project-summary',
    templateUrl: './project-summary.component.html',
    styleUrls: ['./project-summary.component.scss']
})
export class ProjectSummaryComponent {
    accordionData = ACCORDION_ELEMENT_DATA;
    accordionTableConfig = ACCORDION_TABLE_CONFIG;
    gridConfig: GridConfig = GRID_PROJECT_CONFIG;
    gridData: any[] = [];
    gridTotalCount = 0;
    isGridLoading = false;

    constructor() { }

    ngOnInit() {
        this.loadData(0, 10);
    }

    loadData(pageIndex: number, pageSize: number, sort?: any) {
        this.isGridLoading = true;
        // this.gridService
        //     .getData('/api/projects', pageIndex, pageSize, sort?.active, sort?.direction)
        //     .subscribe(res => {
        //         this.data = res.data;
        //         this.total = res.total;
        //         this.loading = false;
        //     });
        this.gridData = GRID_PROJECT_DATA;
        this.gridTotalCount = 0;
        this.isGridLoading = false;
    }

    onPageChange(event: any) {
        this.loadData(event.pageIndex, event.pageSize);
    }

    onSortChange(sort: any) {
        this.loadData(0, this.gridConfig.pageSize!, sort);
    }

    onAction(event: any) {
        if (event.action === 'edit') {
            console.log('Edit', event.row);
        }
        if (event.action === 'delete') {
            console.log('Delete', event.row);
        }
    }

    isComponent(val: any): val is Type<any> {
        return typeof val === 'function';
    }
}

export const GRID_PROJECT_DATA = [
    {
        id: 1,
        name: 'HR Management System',
        client: 'TCS',
        status: 'Active',
        startDate: '2024-01-10'
    },
    {
        id: 2,
        name: 'Finance Tracker',
        client: 'Infosys',
        status: 'Completed',
        startDate: '2023-11-05'
    },
    {
        id: 3,
        name: 'Task Management Tool',
        client: 'Cognizant',
        status: 'Active',
        startDate: '2024-02-15'
    },
    {
        id: 4,
        name: 'Inventory System',
        client: 'Wipro',
        status: 'On Hold',
        startDate: '2024-03-01'
    },
    {
        id: 5,
        name: 'CRM Dashboard',
        client: 'HCL',
        status: 'Active',
        startDate: '2024-04-12'
    }
];

export const GRID_PROJECT_CONFIG: GridConfig = {
    columns: [
        { key: 'name', header: 'Project Name', sortable: true },
        { key: 'client', header: 'Client', sortable: true },
        { key: 'startDate', header: 'Start Date', type: 'date', sortable: true }
    ],
    pageSize: 5
};

export const ACCORDION_ELEMENT_DATA: any[] = [
    {
        position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',
        subList: [{ detailId: 101, info: 'Abundance', value: '0.0001%' }, { detailId: 102, info: 'State', value: 'Gas' }]
    },
    {
        position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',
        subList: [{ detailId: 201, info: 'Abundance', value: '0.0005%' }, { detailId: 202, info: 'State', value: 'Gas' }]
    }
];

export const ACCORDION_TABLE_CONFIG = {
    mainColumns: [
        { key: 'expand', label: '', width: '50px' },
        { key: 'position', label: 'No.', width: '180px' },
        { key: 'name', label: 'Element Name', width: '200px' },
        { key: 'weight', label: 'Weight', width: '120px' },
        { key: 'symbol', label: 'Symbol', width: '100px' }
    ],
    innerColumns: [
        { key: 'detailId', label: 'ID', width: '100px' },
        { key: 'info', label: 'Property', width: '200px' },
        { key: 'value', label: 'Value', width: '150px' }
    ]
};

// tabsList: { label: string; component: Type<any> }[] = [
//     { label: 'List', component: GridAccordionComponent },
//     { label: 'Grid', component: GridComponent },
//     { label: 'Board', component: null as any },
// ];
