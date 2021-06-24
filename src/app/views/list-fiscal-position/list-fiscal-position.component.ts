import { Component, OnInit } from '@angular/core';
import {FiscalPositionService} from '../../services/fiscal-position.service';
import {FiscalPosition} from '../../models/fiscal-position';
import {Router} from '@angular/router';
import {ExternalService} from '../../services/external.service';
import {AccessRequest} from '../../models/request/access-request';
import {AccessResponse} from '../../models/responses/access-response';
import {RecommendationRequest} from '../../models/request/recommendation-request';
import {ItemRequest} from '../../models/request/item-request';
import {ExternalResponse} from '../../models/responses/external-response';

@Component({
  selector: 'app-list-fiscal-position',
  templateUrl: './list-fiscal-position.component.html',
  styleUrls: ['./list-fiscal-position.component.css']
})
export class ListFiscalPositionComponent implements OnInit {

  fiscalPositions: FiscalPosition[];
  fiscalPositionId: number;
  pagePosition = 0;
  visibleModalDelete = false;
  // route: ActivatedRoute
  constructor(private fiscalPositionService: FiscalPositionService, private externalService: ExternalService,
              private router: Router ) {}

  ngOnInit(): void {
    // this.getAllFiscalPositions();
    this.getExternalToken();
  }
  mapAccessResponse(response): AccessResponse{
    const access = new AccessResponse();
    access.accessToken = response.access_token;
    access.consentedOn = response.consented_on;
    access.expiresIn = response.expires_in;
    access.scope = response.scope;
    access.tokenType = response.token_type;
    return access;
  }
  getExternalToken(): void{
    const access = new AccessRequest();
    access.grantType = 'client_credentials';
    access.clientId = '4259d19cefd94c2c234177fb2a79a368';
    access.scope = 'details';
    access.clientSecret = '69350fef068acc70858a164170c5997d';
    this.externalService.getAccess(access).subscribe(
      response => {
        const accessResponse = this.mapAccessResponse(response);
        this.getRecommendations(accessResponse.accessToken);
      }, err => console.log(err)
    );
  }
  fillRecommendations(): RecommendationRequest{
    const request = new RecommendationRequest();
    request.companyName = '10';
    request.date = '2021-01-01';
    request.cardType = '01';
    request.product = '401010101';
    request.program = '60';
    request.items = this.fillItems();
    return request;
  }
  fillItems(): ItemRequest[]{
    const items: ItemRequest[] = [];
    const item1 = new ItemRequest();
    item1.clientCode = '1';
    item1.documentType = '01';
    item1.documentId = '75245689';
    item1.birthdate = '2000-01-09';
    item1.flag = '0';
    const item2 = new ItemRequest();
    item2.clientCode = '2';
    item2.documentType = '01';
    item2.documentId = '0245689';
    item2.birthdate = '1980-01-09';
    item2.flag = '0';
    items.push(item1);
    items.push(item2);
    return items;
  }
  getRecommendations(token: string): void{
    const request = this.fillRecommendations();
    this.externalService.getRecommendations(token, request).subscribe(
      response => {
        const externalResponse: ExternalResponse = response;
        console.log(externalResponse);
      }, err => console.log(err)
    );
  }
  getAllFiscalPositions(): void{
    this.fiscalPositionService.getAllFiscalPositions(this.pagePosition).subscribe(
      (response: any) => this.fiscalPositions = response.content, (error) => console.log(error));
  }
  previousPage(): void{
    if (this.pagePosition > 0){
      this.pagePosition--;
      this.fiscalPositionService.getAllFiscalPositions(this.pagePosition).subscribe(
        (response: any) => this.fiscalPositions = response.content, (error) => console.log(error));
    }
  }
  nextPage(): void{
    this.pagePosition++;
    this.fiscalPositionService.getAllFiscalPositions(this.pagePosition).subscribe(
      (response: any) => response ? this.fiscalPositions = response.content : this.pagePosition--, (error) => console.log(error));
  }
  goToEditFiscalPosition(id: number): void{
    this.router.navigate([`edit-fiscal-position/${id}`]).then();
  }
  showModalDelete(fiscalPositionId: number): void{
    this.fiscalPositionId = fiscalPositionId;
    this.visibleModalDelete = true;
  }
  cancelModalDelete(): void{
    this.visibleModalDelete = false;
  }
  deleteFiscalPosition(): void{
    this.fiscalPositionService.deleteFiscalPosition(this.fiscalPositionId).subscribe();
  }
}
