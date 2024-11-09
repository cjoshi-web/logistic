import { Component } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Observable } from 'rxjs';
import { AddressModel } from '../models/address-model';
import { CommonModule } from '@angular/common';

export interface Tutorial {
  key?: string | null;
  title: string;
  url: string;
}

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  
  addresses$: Observable<AddressModel[]>

  constructor(private db: CompanyService) {
    this.addresses$ = this.db.getAll();
  }
}
