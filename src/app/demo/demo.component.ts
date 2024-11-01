import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ShipmentComponent } from "../shipment/shipment.component";
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ContextMenuModule } from 'primeng/contextmenu';
import { CurrencyPipe } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ShipmentService } from '../services/shipment.service';
import { ShipmentModel } from '../models/shipment-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    ButtonModule, 
    DialogModule, 
    ShipmentComponent, 
    TableModule, 
    ToastModule, 
    TagModule, 
    IconFieldModule, 
    InputIconModule, 
    InputTextModule, 
    ContextMenuModule,
    CurrencyPipe,
    SidebarModule,
    CommonModule,
  ],
    
  providers: [MessageService],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  items: MenuItem[] | undefined;
  visible: boolean = false;
  products: {}[] = [];
  selectedProduct!: any;
  sidebarVisible: boolean = false;
  shipments$: Observable<ShipmentModel[]>

  constructor(private primengConfig: PrimeNGConfig, private router: Router, private messageService: MessageService, private db: ShipmentService) {
    this.shipments$ = db.getAll();
    console.log(this.shipments$)
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      {
        label: "Freight Details",
        icon: 'pi pi-globe',
        routerLink: '/freight',
        command: () => this.deleteProduct(this.selectedProduct)
      },
      {
        label: "Bayan Details",
        icon: 'pi pi-pen-to-square',
        routerLink: '/bayan',
        command: () => this.deleteProduct(this.selectedProduct)
      }, 
      {
        label: "Payment Details",
        icon: 'pi pi-paypal',
        routerLink: '/payment',
        command: () => this.deleteProduct(this.selectedProduct)
      }, 
      {
        label: "Tracking Details",
        icon: 'pi pi-hourglass',
        routerLink: '/tracking',
        command: () => this.deleteProduct(this.selectedProduct)
      }, 
    ]
    this.products.push({
      "id": 1,
      "invoiceeNumber": "APP-FZCO-OM-123",
      "consigneeName": "Apparel Intenrational LLC",
      "brandName": "Mix Brand",
      "QTY": 36541,
      "pallets": 23,
      "amount": 1236543.32,
      "status": "UPCOMMING",
    })
    this.products.push({
      "id": 2,
      "invoiceeNumber": "RB/FZCO/OM/256",
      "consigneeName": "R&B FASHION LLC",
      "brandName": "R&B",
      "QTY": 123456,
      "pallets": 12,
      "amount": 361456.32,
      "status": "UNDER CLEARANCE",
    })
    this.products.push({
      "id": 3,
      "invoiceeNumber": "RB/FZCO/OM/255",
      "consigneeName": "R&B FASHION LLC",
      "brandName": "R&B",
      "QTY": 123456,
      "pallets": 12,
      "amount": 361456.32,
      "status": "CLEARED",
    })
  }
  deleteProduct(product: any){
    console.log(product);
  }
  showDialog() {
    this.visible = true;
  }
  editPage(product: any) {
    this.router.navigate(['/editShipment', product.id])
  }
  onRowSelect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.invoiceNumber });
  }
  onRowUnselect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Product Unselected', detail: event.data.invoiceNumber });
  }
  getSeverity(status: string) {
    switch (status) {
      case 'UPCOMMING':
        return 'warning';
      case 'UNDER CLEARANCE':
        return 'danger';
      case 'CLEARED':
        return 'success';
    }
    return 'success';
  }
}
