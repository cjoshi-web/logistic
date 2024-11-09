import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { AppService } from './services/app.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenubarComponent,
    HomeComponent,
    DropdownModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  themes = [
    { id: 'fluent-light', label: 'Fluent' },
    { id: 'arya-blue', label: 'Arya' },
    { id: 'boostrap4-dark-blue', label: 'Boostrap Dark' },
    { id: 'boostrap4-light-blue', label: 'Boostrap Light' },
    { id: 'lara-light-blue', label: 'Lara' },
    { id: 'luna-amber', label: 'Luna' },
    { id: 'mdc-dark-indigo', label: 'Material Dark' },
    { id: 'mdc-light-deeppurple', label: 'Material Light' },
    { id: 'mira', label: 'Mira' },
    { id: 'nano', label: 'Nano' },
    { id: 'nova', label: 'Nova' },
    { id: 'rhea', label: 'Rhea' },
    { id: 'saga-blue', label: 'Saga' },
    { id: 'soho-light', label: 'Soho' },
    { id: 'viva-light', label: 'Viva' },
  ]
  selectedTheme: { id: string, label: string } = this.themes[0];

  constructor(private themeService: AppService) { }

  ngOnInit() {
    let myTheme = JSON.parse(localStorage.getItem("myTheme")!) as { id: string, label: string };
    if(myTheme){
      this.themeService.switchTheme(myTheme.id)
      this.selectedTheme = myTheme;
    }
  }
  changeTheme(theme: any) {
    this.themeService.switchTheme(theme.id);
    localStorage.setItem("myTheme", JSON.stringify(theme))
  }
}
