import { TemplateRef } from '@angular/core';

export interface GridColumn {
    key: string;
    header: string;
    sortable?: boolean;
    width?: string;
    type?: 'text' | 'date' | 'number' | 'custom';
    template?: TemplateRef<any>;
}

export interface GridAction {
    label: string;
    icon: string;
    action: string;
    color?: string;
}

export interface GridConfig {
    columns: GridColumn[];
    actions?: GridAction[];
    pageSize?: number;
    pageSizeOptions?: number[];
}
