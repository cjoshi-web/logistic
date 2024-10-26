import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    FloatLabelModule,
    ReactiveFormsModule,
    CardModule,
    TableModule,
    CalendarModule,
    DropdownModule,
    ChipsModule,
    InputNumberModule,
    ButtonModule
  ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
  
  addressForm!: FormGroup;
  addresses = [
    { code: "abc", name: "xyz", category: "xyz", quantity: 52 }
  ]

  constructor(private primengConfig: PrimeNGConfig, private formBuilder: FormBuilder) {
    
    this.addressForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      vatin: ['', Validators.required],
      contactPerson: [undefined, Validators.required],
      contactNumber: [undefined],
      contactEmail: [undefined, Validators.required],
    });
  }
  onSubmit() {
      console.log(this.addressForm.value);
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
