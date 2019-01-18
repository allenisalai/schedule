import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {RouterModule} from "@angular/router";
import {ClientRoutes} from "./client.routing";
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [ListComponent, EditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ClientRoutes),
  ]
})
export class ClientModule { }
