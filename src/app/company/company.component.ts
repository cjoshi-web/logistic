import { Component } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Observable } from 'rxjs';
import { AddressModel } from '../models/address-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
  
  addresses$: Observable<AddressModel[]>

  constructor(private db: CompanyService) {
    this.addresses$ = this.db.getAll();
  }
}
