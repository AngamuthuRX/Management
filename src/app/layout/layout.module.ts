import { NgModule } from '@angular/core';

import { HeaderComponent } from '../layout/header/header.component';
import { SideNavComponent } from '../layout/side-nav/side-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HeaderComponent,
        SideNavComponent,
        LayoutComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: []
})
export class LayoutModule { }
