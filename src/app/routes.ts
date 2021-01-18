import {Routes} from '@angular/router';
import {ListFiscalPositionComponent} from './views/list-fiscal-position/list-fiscal-position.component';

export const routes: Routes = [
  {path: '', redirectTo: 'fiscal-positions', pathMatch: 'full'},
  {path: 'fiscal-positions', component: ListFiscalPositionComponent}
];
