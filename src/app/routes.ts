import {Routes} from '@angular/router';
import {ListFiscalPositionComponent} from './views/list-fiscal-position/list-fiscal-position.component';
import {AddFiscalPositionComponent} from './views/add-fiscal-position/add-fiscal-position.component';

export const routes: Routes = [
  {path: '', redirectTo: 'fiscal-positions', pathMatch: 'full'},
  {path: 'fiscal-positions', component: ListFiscalPositionComponent},
  {path: 'add-fiscal-position', component: AddFiscalPositionComponent}
];
