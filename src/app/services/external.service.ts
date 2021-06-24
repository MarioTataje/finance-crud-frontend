import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AccessRequest} from '../models/request/access-request';
import {RecommendationRequest} from '../models/request/recommendation-request';

@Injectable({
  providedIn: 'root'
})
export class ExternalService {
  tokenUrl = 'https://gw.npos.auna.pe/qa/aseguramiento/applicationprovideroa/oauth2/token';
  recommendationUrl = 'https://gw.npos.auna.pe/qa/aseguramiento/saleCommodities/v1/recommendations';
  constructor(private http: HttpClient) { }

  getAccess(request: AccessRequest): any{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
    };
    const params = new HttpParams({
      fromObject: { grant_type: request.grantType, client_id: request.clientId, scope: request.scope,
        client_secret: request.clientSecret},
    });
    return this.http.post(this.tokenUrl, params, httpOptions);
  }

  getRecommendations(token: string, request: RecommendationRequest): any{
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        system: 'SAP',
        ip: '10.11.11.11',
        destination: 'xHIS',
        subsystem: 'SAP_ERP',
        originator: 'SAP:SAP_ERP',
        'trace-level': 'INFO',
        'user-id': 'gmaravi999',
        operation: 'examenes',
        'exec-id': '550e8400-e29b-41d4-a716-446655440001',
        timestamp: '2019-01-31T09:29:48.233+01:00',
        'X-IBM-Client-Id': '4259d19cefd94c2c234177fb2a79a368'
      }),
    };
    return this.http.post(this.recommendationUrl, request, httpOptions);
  }
}
