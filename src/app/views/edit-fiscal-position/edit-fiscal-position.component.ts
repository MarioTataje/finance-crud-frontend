import { Component, OnInit } from '@angular/core';
import {FiscalPositionService} from '../../services/fiscal-position.service';
import {FiscalPosition} from '../../models/fiscal-position';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-fiscal-position',
  templateUrl: './edit-fiscal-position.component.html',
  styleUrls: ['./edit-fiscal-position.component.css']
})
export class EditFiscalPositionComponent implements OnInit {
  fiscalPosition: FiscalPosition;
  statesOptions = ['Actual', 'Revised', 'Estimated'];
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private fiscalPositionService: FiscalPositionService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getFiscalPosition();
    this.createForm();
  }
  getFiscalPosition(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.fiscalPositionService.getFiscalPositionById(Number(id)).subscribe(
      response => {
        this.form.controls.yearOfBalance.setValue(response.yearOfBalance);
        this.form.controls.state.setValue(response.state);
        this.form.controls.category.setValue(response.category);
        this.form.controls.item.setValue(response.item);
        this.form.controls.amount.setValue(response.amount);
        this.form.controls.percentOfGdp.setValue(response.percentOfGdp);
      }, (error) => console.log(error));
  }
  createForm(): void{
    this.form = this.formBuilder.group({
      yearOfBalance: [``, [Validators.required]],
      state: ['', [Validators.required]],
      category: ['', [Validators.required]],
      item: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.max(1000000)]],
      percentOfGdp: ['', Validators.required]
    });
  }
  updateFiscalPosition(): void{
    if (this.form.invalid){
      console.log('invalid');
    } else {
      const id = this.route.snapshot.paramMap.get('id');
      this.fiscalPosition = this.form.value;
      // this.fiscalPosition.yearOfBalance = this.form.controls.yearOfBalance.value;
      this.fiscalPositionService.updateFiscalPosition(Number(id), this.fiscalPosition).subscribe();
      this.router.navigate(['fiscal-positions']).then(() => location.reload());
    }
  }
}
