import {Routes} from '@angular/router';
import {ListComponent} from "./list/list.component";
import {EditComponent} from "./edit/edit.component";


export const ClientRoutes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'add',
        component: EditComponent
    },
];