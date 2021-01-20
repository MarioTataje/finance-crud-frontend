import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { ListFiscalPositionComponent } from './views/list-fiscal-position/list-fiscal-position.component';
import { AppComponent } from './app.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import {HttpClientModule} from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule} from 'ng-zorro-antd/input';
import { AddFiscalPositionComponent } from './views/add-fiscal-position/add-fiscal-position.component';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzSpaceModule } from 'ng-zorro-antd/space';
import { EditFiscalPositionComponent } from './views/edit-fiscal-position/edit-fiscal-position.component';
import {NzModalModule} from 'ng-zorro-antd/modal';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ListFiscalPositionComponent,
    AddFiscalPositionComponent,
    EditFiscalPositionComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        NzTableModule,
        FormsModule,
        NzButtonModule,
        BrowserAnimationsModule,
        NzLayoutModule,
        NzGridModule,
        NzIconModule,
        NzInputModule,
        NzCardModule,
        ReactiveFormsModule,
        NzSelectModule,
        NzSpaceModule,
        NzModalModule
    ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
