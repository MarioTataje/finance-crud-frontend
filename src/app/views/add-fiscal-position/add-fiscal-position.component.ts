import { Component, OnInit} from '@angular/core';
import {FiscalPosition} from '../../models/fiscal-position';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {FiscalPositionService} from '../../services/fiscal-position.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-fiscal-position',
  templateUrl: './add-fiscal-position.component.html',
  styleUrls: ['./add-fiscal-position.component.css']
})
export class AddFiscalPositionComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private fiscalPositionService: FiscalPositionService, private router: Router ) { }

  fiscalPosition = new FiscalPosition();
  statesOptions = ['Actual', 'Revised', 'Estimated'];
  form: FormGroup;
  ngOnInit(): void {
    this.createForm();
  }
  createForm(): void{
    this.form = this.formBuilder.group({
      yearOfBalance: ['', [Validators.required]],
      state: ['', [Validators.required]],
      category: ['', [Validators.required]],
      item: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.max(1000000)]],
      percentOfGdp: ['', Validators.required]
    });
  }
  saveFiscalPosition(): void{
    if (this.form.invalid){
      console.log('invalid');
    } else {
      this.fiscalPosition = this.form.value;
      this.fiscalPositionService.saveFiscalPosition(this.fiscalPosition).subscribe();
      this.router.navigate(['fiscal-positions']).then();
    }
  }
}
