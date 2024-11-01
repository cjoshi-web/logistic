import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-edit-shipment',
  standalone: true,
  imports: [CardModule,ButtonModule,TableModule,InputTextModule,CalendarModule,FloatLabelModule,DropdownModule,DialogModule, PaymentComponent],
  templateUrl: './edit-shipment.component.html',
  styleUrl: './edit-shipment.component.css'
})
export class EditShipmentComponent {
  visible: boolean = false;
  payments: any;
  serviceBy: Object[] = [
    { type: 'AIR' },
    { type: 'LTL' },
    { type: '1x10' },
    { type: '1x20' },
    { type: '1x40' }
  ]
  param: any

  constructor(private route: ActivatedRoute) {

    this.param = this.route.snapshot.paramMap.get('id');
    
  }

  addPayment(){
    this.visible = true;
  }
}
