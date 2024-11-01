import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [
    MenubarModule,
  ],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home',
      },
      {
        label: 'Companies',
        icon: 'pi pi-building',
        routerLink: '/company'
      },
      {
        label: 'Shipments',
        icon: 'pi pi-truck',
        routerLink: '/shipments'
      },
      {
        label: 'Freight',
        icon: 'pi pi-globe',
        routerLink: '/freight',
      },
      {
        label: 'Bayan',
        icon: 'pi pi-pen-to-square',
        routerLink: '/bayan'
      },
      {
        label: 'Payment',
        icon: 'pi pi-paypal',
        routerLink: '/payment'
      },
      {
        label: 'Track Shipment',
        icon: 'pi pi-spin pi-spinner',
        routerLink: '/tracking'
      },
      {
        label: 'New Style Form',
        icon: 'pi pi-building',
        routerLink: '/demo'
      },
      {
        label: 'Firebase Connection',
        icon: 'pi pi-building',
        routerLink: '/test'
      },
      {
        label: 'AAA',
        icon: 'pi pi-building',
        routerLink: '/a'
      },
    ]
  }

}
