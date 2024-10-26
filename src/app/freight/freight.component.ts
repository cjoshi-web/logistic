import { Component } from '@angular/core';
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
  selector: 'app-freight',
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
    ButtonModule],
  templateUrl: './freight.component.html',
  styleUrl: './freight.component.css'
})
export class FreightComponent {
  freightForm!: FormGroup;
  freights = [
    { code: "abc", name: "xyz", category: "xyz", quantity: 52 }
  ]

  constructor(private primengConfig: PrimeNGConfig, private formBuilder: FormBuilder) {
    
    this.freightForm = this.formBuilder.group({
      gsNumber: ['', Validators.required],
      serviceBy: ['', Validators.required],
      freightForwarderName: ['', Validators.required],
      msasterAWB: ['', Validators.required],
      houseAWB: ['', Validators.required],
      chargeableWeight: [undefined, Validators.required],
      volumeInCubicMeter: [undefined],
      portOfLoading: [undefined, Validators.required],
      portOfDischarge: [undefined, Validators.required],
      truckDriverName: [undefined, Validators.required],
      truckNumber: [undefined, Validators.required],
      truckDriverContactNumber: [undefined, Validators.required],
    });
  }
  onSubmit() {
      console.log(this.freightForm.value);
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
