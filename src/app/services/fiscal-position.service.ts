import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import { HttpParams } from '@angular/common/http';
import {FiscalPosition} from '../models/fiscal-position';

@Injectable({
  providedIn: 'root'
})
export class FiscalPositionService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {

  }
  getAllFiscalPositions(page: number): Observable<FiscalPosition[]>{
    let parameters = new HttpParams();
    parameters = parameters.append('size', String(5));
    parameters = parameters.append('page', String(page));
    return this.http.get<FiscalPosition[]>(`${this.baseUrl}/fiscal-positions`, {params: parameters});
  }
  saveFiscalPosition(fiscalPosition: FiscalPosition): any{
    return this.http.post<FiscalPosition>(`${this.baseUrl}/fiscal-positions`, fiscalPosition);
  }
  updateFiscalPosition(id: number, fiscalPosition: FiscalPosition): any{
    return this.http.put<FiscalPosition>(`${this.baseUrl}/fiscal-positions/${id}`, fiscalPosition);
  }
  deleteFiscalPosition(id: number): any{
    return this.http.delete<FiscalPosition>(`${this.baseUrl}/fiscal-positions/${id}`);
  }
}

