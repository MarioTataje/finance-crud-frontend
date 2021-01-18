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
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AddFiscalPositionComponent } from './views/add-fiscal-position/add-fiscal-position.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ListFiscalPositionComponent,
    AddFiscalPositionComponent,
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
    NzGridModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
