import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'shared-card-header-add-btn',
    template: `
        <p class="text-right mt-1">
            <a class="btn btn-primary btn-round btn-sm" [routerLink]="link">
                <i class="material-icons">{{icon}}</i> {{text}}
            </a>
        </p>
    `,
    styles: []
})
export class AddBtnComponent implements OnInit {

    @Input() text: string;
    @Input() icon: string;

    @Input() link: Array<any> = []

    constructor() {
    }

    ngOnInit() {
    }

}
