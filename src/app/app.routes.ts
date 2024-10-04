import { Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { HomeComponent } from './home/home.component';
import { BayanComponent } from './bayan/bayan.component';
import { FreightComponent } from './freight/freight.component';
import { PaymentComponent } from './payment/payment.component';
import { TrackingComponent } from './tracking/tracking.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'company', component: CompanyComponent },
    { path: 'home', component: HomeComponent },
    { path: 'shipments', component: ShipmentComponent },
    { path: 'freight', component: FreightComponent },
    { path: 'bayan', component: BayanComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'tracking', component: TrackingComponent },
    { path: 'test', component: TestComponent },
];
