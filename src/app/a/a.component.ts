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
  selector: 'app-a',
  standalone: true,
  imports: [CardModule,ButtonModule,TableModule,InputTextModule,CalendarModule,FloatLabelModule,DropdownModule,DialogModule, PaymentComponent],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {
  visible: boolean = false;
  payments: any;
  serviceBy: Object[] = [
    { name: 'APPAREL INTERNATIONAL LLC' },
    { name: 'R&B FASHION LLC' },
    { name: 'CREATEIVE BRAND FASHON WLL' },
  ]
  param: any

  constructor(private route: ActivatedRoute) {

    this.param = this.route.snapshot.paramMap.get('id');
    
  }

  addPayment(){
    this.visible = true;
  }
}
