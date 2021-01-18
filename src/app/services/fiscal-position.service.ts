import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {FiscalPosition} from '../models/fiscal-position';

@Injectable({
  providedIn: 'root'
})
export class FiscalPositionService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {

  }
  getAllFiscalPositions(): Observable<FiscalPosition[]>{
    return this.http.get<FiscalPosition[]>(`${this.baseUrl}/fiscal-positions`);
  }
}

