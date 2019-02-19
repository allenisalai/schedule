import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {PageComponent} from './page/page.component';
import {CardHeaderComponent} from './card-header/card-header.component';
import { AddBtnComponent } from './card-header/add-btn/add-btn.component';
import {RouterModule} from "@angular/router";
import {MatFormFieldModule, MatInputModule} from "@angular/material";

@NgModule({
    declarations: [BreadcrumbComponent, PageComponent, CardHeaderComponent, AddBtnComponent],
    exports: [
        BreadcrumbComponent,
        PageComponent,
        CardHeaderComponent,
        AddBtnComponent,
        MatFormFieldModule,
        MatInputModule,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
    ]
})
export class SharedModule {
}
