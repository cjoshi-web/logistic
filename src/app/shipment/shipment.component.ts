import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';
import { AddressModel } from '../models/address-model';
import CurrencyList from 'currency-list'
import { ShipmentModel } from '../models/shipment-model';
import { Observable } from 'rxjs';
import { ShipmentService } from '../services/shipment.service';

@Component({
  selector: 'app-shipment',
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
  templateUrl: './shipment.component.html',
  styleUrl: './shipment.component.css'
})
export class ShipmentComponent implements OnInit {

  shipmentForm!: FormGroup;
  consigneeList!: AddressModel;
  shipperList!: AddressModel;
  currancyList: Object[];
  shipments$: Observable<ShipmentModel[]>

  constructor(private primengConfig: PrimeNGConfig, private formBuilder: FormBuilder, private db: ShipmentService) {
    this.shipments$ = db.getAll();
    this.currancyList = Object.values(CurrencyList.getAll('en_US'))

    this.shipmentForm = this.formBuilder.group({
      invoiceNumber: ['', Validators.required],
      invoiceDate: ['', Validators.required],
      consignee: ['', Validators.required],
      shipper: ['', Validators.required],
      brandList: ['', Validators.required],
      qty: [undefined, Validators.required],
      qtySet: [undefined],
      ctns: [undefined, Validators.required],
      pallets: [undefined, Validators.required],
      amount: [undefined, Validators.required],
      currancy: ['', Validators.required],
      netWeight: [, Validators.required],
      grossWeight: [, Validators.required],
      grossWeightPallet: [, Validators.required],
      incoTerms: ['', Validators.required],
      customerTrackingId: ['']
    });
  }
  onSubmit() {
    const obj = this.shipmentForm.value
    obj.status = "Upcomming"
     this.db.create(obj)
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  brandList: string[] | undefined;
  selectedCurrancy = undefined
  selectedIncoTerms = undefined
  incoTerms = [
    { name: "EXW" },
    { name: "FCA" },
    { name: "CPT" },
    { name: "CIP" },
    { name: "DAP" },
    { name: "DPU" },
    { name: "DDP" },
    { name: "FAS" },
    { name: "FOB" },
    { name: "CFR" },
    { name: "CIF" },
  ]
  
  invoices = [
    { code: "abc", name: "xyz", category: "xyz", quantity: 52 }
  ]
  consignees = [
    { name: "Apparel" },
    { name: "R&B" },
  ]
  shippers = [
    { name: "Apparel" },
    { name: "R&B" },
  ]

  selectedConsignee = undefined
  selectedShipper = undefined
}
