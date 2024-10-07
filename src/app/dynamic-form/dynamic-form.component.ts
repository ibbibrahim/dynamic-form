import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    CommonModule,
    MatDialogModule
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {
  form: FormGroup;
  interests = ['Movies', 'Sports', 'Music', 'Food']
  isShowFields = false

  constructor(private fb: FormBuilder){
    this.form =  this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  submit(){
    if(this.form.valid){
      console.log(this.form.value)

      //fake api call
      this.additionalFields();
    }
  }

  additionalFields(){
    this.isShowFields = true;
    this.form.addControl("age", this.fb.control("", Validators.required));
    this.form.addControl("gender", this.fb.control(""));
  }

  



}
