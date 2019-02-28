import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {RouterModule} from "@angular/router";
import {ClientRoutes} from "./client.routing";
import { EditComponent } from './edit/edit.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [ListComponent, EditComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ClientRoutes),
  ]
})
export class ClientModule { }
