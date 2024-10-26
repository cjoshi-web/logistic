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
  selector: 'app-tracking',
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
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.css'
})
export class TrackingComponent {
  addressForm!: FormGroup;
  addresses = [
    { code: "abc", name: "xyz", category: "xyz", quantity: 52 }
  ]

  constructor(private primengConfig: PrimeNGConfig, private formBuilder: FormBuilder) {
    
    this.addressForm = this.formBuilder.group({
      ETD_estimatedTimeOfDeparture: ['', Validators.required],
      ATD_actualTimeOfDeparture: ['', Validators.required],
      ETA_estimatedTimeOfArrival: ['', Validators.required],
      ATA_actualTimeOfArrival: ['', Validators.required],
      clearanceDate: [undefined, Validators.required],
      dcInDate: [undefined],
      storeInDate: [undefined, Validators.required],
    });
  }
  onSubmit() {
      console.log(this.addressForm.value);
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
