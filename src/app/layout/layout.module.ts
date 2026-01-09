import { NgModule } from '@angular/core';

import { HeaderComponent } from '../layout/header/header.component';
import { SideNavComponent } from '../layout/side-nav/side-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    declarations: [
        HeaderComponent,
        SideNavComponent,
        LayoutComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: []
})
export class LayoutModule { }
