import { Component, OnInit } from '@angular/core';
import {BreadcrumbLink} from "../../shared/breadcrumb/breadcrumb-link";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: []
})
export class EditComponent implements OnInit {

  public breadcrumbLinks: Array<BreadcrumbLink> = [];

  constructor() { }

  ngOnInit() {
    this.breadcrumbLinks = [
      new BreadcrumbLink('Clients', false, ['/clients']),
      new BreadcrumbLink('New Client', true, ),
    ]
  }

}
