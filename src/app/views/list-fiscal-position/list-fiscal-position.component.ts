import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FiscalPositionService} from '../../services/fiscal-position.service';
import {FiscalPosition} from '../../models/fiscal-position';

@Component({
  selector: 'app-list-fiscal-position',
  templateUrl: './list-fiscal-position.component.html',
  styleUrls: ['./list-fiscal-position.component.css']
})
export class ListFiscalPositionComponent implements OnInit {

  fiscalPositions: FiscalPosition[];
  // route: ActivatedRoute
  constructor(private router: Router, private fiscalPositionService: FiscalPositionService) {}

  ngOnInit(): void {
    this.getAllFiscalPositions();
  }
  getAllFiscalPositions(): void{
    this.fiscalPositionService.getAllFiscalPositions().subscribe(
      (response: any) => this.fiscalPositions = response.content, (error) => console.log(error));
  }
}
