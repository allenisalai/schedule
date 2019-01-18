import {Component, OnInit} from '@angular/core';

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-client',
    templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
    public dataTable: DataTable;

    constructor() {
    }


    ngOnInit() {
        this.dataTable = {
            headerRow: ['Name', 'Actions'],
            footerRow: ['Name', 'Actions'],
            dataRows: []
        }
    }

}
