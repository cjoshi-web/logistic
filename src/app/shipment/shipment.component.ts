import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';
import { ShipmentModel } from '../models/shipment-model';

@Component({
  selector: 'app-shipment',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule,
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
  shipment!: ShipmentModel

  constructor(private primengConfig: PrimeNGConfig) {
    //this.createForm();
  }

  createForm(){
    this.shipmentForm = new FormGroup({
      invoiceNumber: new FormControl(this.shipment.invoiceNumber),
      invoiceDate: new FormControl(this.shipment.invoiceDate,[Validators.required]),
      consigneeAddress: new FormControl(this.shipment.consigneeAddress),
      shipperAddress: new FormControl(this.shipment.shipperAddress),
      qty: new FormControl(this.shipment.qty),
      qtySet: new FormControl(this.shipment.qtySet),
      ctns: new FormControl(this.shipment.ctns),
      pallets: new FormControl(this.shipment.pallets),
      amount: new FormControl(this.shipment.amount),
      currancy: new FormControl(this.shipment.currancy),
      netWeight: new FormControl(this.shipment.netWeight),
      grossWeight: new FormControl(this.shipment.grossWeight),
      grossWeightPallet: new FormControl(this.shipment.grossWeightPallet),
      incoTerms: new FormControl(this.shipment.incoTerms),
      customerTrackingId: new FormControl(this.shipment.customerTrackingId),
    });
  }
  ngOnInit() {
      this.primengConfig.ripple = true;
  }
    brandList: string[] | undefined;
    selectedCurrancy = undefined
    selectedIncoTerms = undefined
    incoTerms = [
      {name: "EXW"},
      {name: "FCA"},
      {name: "CPT"},
      {name: "CIP"},
      {name: "DAP"},
      {name: "DPU"},
      {name: "DDP"},
      {name: "FAS"},
      {name: "FOB"},
      {name: "CFR"},
      {name: "CIF"},
    ]
    currancy = [
      {name: "AED"},
      {name: "OMR"},
      {name: "USD"},
      {name: "EUR"},
    ]
    invoices = [
      {code: "abc", name: "xyz", category: "xyz", quantity: 52}
    ]
    consignees = [
      {name: "Apparel"},
      {name: "R&B"},
    ]
    shippers = [
      {name: "Apparel"},
      {name: "R&B"},
    ]

    selectedConsignee = undefined
    selectedShipper= undefined
}
