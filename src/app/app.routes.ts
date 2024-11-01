import { Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { HomeComponent } from './home/home.component';
import { BayanComponent } from './bayan/bayan.component';
import { FreightComponent } from './freight/freight.component';
import { PaymentComponent } from './payment/payment.component';
import { TrackingComponent } from './tracking/tracking.component';
import { TestComponent } from './test/test.component';
import { DemoComponent } from './demo/demo.component';
import { EditShipmentComponent } from './edit-shipment/edit-shipment.component';
import { AComponent } from './a/a.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'company', component: CompanyComponent },
    { path: 'home', component: HomeComponent },
    { path: 'shipments', component: ShipmentComponent },
    { path: 'freight', component: FreightComponent },
    { path: 'bayan', component: BayanComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'tracking', component: TrackingComponent },
    { path: 'test', component: TestComponent },
    { path: 'demo', component: DemoComponent },
    { path: 'editShipment/:id', component: EditShipmentComponent },
    { path: 'a/:id', component: AComponent },
    // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
