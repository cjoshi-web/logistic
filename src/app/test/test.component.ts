import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

export interface Tutorial {
  key?: string | null;
  title: string;
  url: string;
}

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  userForm: FormGroup
  
  constructor(private fb: FormBuilder) { 
    this.userForm = this.fb.group({
      test: ['']
    });
  }
  addTutorial(){
    console.log(this.userForm.value)
  }
}
