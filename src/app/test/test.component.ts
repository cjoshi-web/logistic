import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { TestService } from '../services/test.service';

export interface Tutorial {
  key?: string | null;
  title: string;
  url: string;
}

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  tutorials$: Observable<Tutorial[]>;

  constructor(private testService: TestService) { 
    this.tutorials$ = this.testService.getAll()
    const test = this.testService.create({} as Tutorial)
    this.addTutorial();
  }
  addTutorial(){
    this.testService.create({} as Tutorial)
    .then(()=>{
      console.log("data added");
    })
    .catch((error: any) => {
      console.log(error);
    })
    .finally(() => {
      // Optional: Perform cleanup or logging here
    })
  }
}
