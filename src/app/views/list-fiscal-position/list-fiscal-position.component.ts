import { Component, OnInit } from '@angular/core';
import {FiscalPositionService} from '../../services/fiscal-position.service';
import {FiscalPosition} from '../../models/fiscal-position';
import {Router} from '@angular/router';

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
  constructor(private fiscalPositionService: FiscalPositionService, private router: Router ) {}

  ngOnInit(): void {
    this.getAllFiscalPositions();
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
    this.fiscalPositionService.deleteFiscalPosition(this.fiscalPositionId).subscribe(location.reload());
  }
}
