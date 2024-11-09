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
  styleUrl: './demo.component.css',
})
export class DemoComponent {
  items: MenuItem[] | undefined;
  visible: boolean = false;
  products: {}[] = [];
  selectedProduct!: ShipmentModel;
  sidebarVisible: boolean = false;
  shipments$: Observable<ShipmentModel[]>
  a$: Observable<ShipmentModel>

  constructor(private primengConfig: PrimeNGConfig, private router: Router, private messageService: MessageService, private db: ShipmentService) {
    this.shipments$ = db.getAll();
    this.a$ = this.db.getShipmentById("-OAdTzdgLwfiIBDIFS52")
    
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      {
        label: "Freight Details",
        icon: 'pi pi-globe',
        command: () => {
          this.router.navigate(['/freight', this.selectedProduct.key ]);
        }
      },
      {
        label: "Bayan Details",
        icon: 'pi pi-pen-to-square',
        command: () => {
          this.router.navigate(['/bayan', this.selectedProduct.key]);
        }
      },
      {
        label: "Payment Details",
        icon: 'pi pi-paypal',
        command: () => {
          this.router.navigate(['/payment', this.selectedProduct.key]);
        }
      },
      {
        label: "Tracking Details",
        icon: 'pi pi-hourglass',
        command: () => {
          this.router.navigate(['/tracking', this.selectedProduct.key]);
        }
      },
    ]
  }
  showDialog() {
    this.visible = true;
  }
  editPage(product: any) {
    this.router.navigate(['/editShipment', product.id])
  }
  onRowSelect(event: any) {
    console.log(event.data)
    this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.id });
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
