import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'shared-page',
    template: `
        <div class="main-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <ng-content select=".page-breadcrumbs"></ng-content>
                        <div class="card">
                            <ng-content select=".page-header">
                                
                            </ng-content>
                            <div class="card-body">
                                <ng-content select=".page-body"></ng-content>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: []
})
export class PageComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
