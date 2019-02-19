import {Component, Input, OnInit} from '@angular/core';
import {BreadcrumbLink} from "./breadcrumb-link";

@Component({
  selector: 'shared-breadcrumbs',
  template: `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li *ngFor="let l of links;" class="breadcrumb-item" [ngClass]="{'active': l.isActive}">
          <a *ngIf="l.isActive == false; else nonLink" [routerLink]="l.routerLink">
            {{l.title}}
          </a>
          <ng-template #nonLink>
            {{l.title}}
          </ng-template>
        </li>
        
      </ol>
    </nav>
  `,
  styles: []
})
export class BreadcrumbComponent implements OnInit {

  @Input() links:Array<BreadcrumbLink> = [];

  ngOnInit() {
  }

}
