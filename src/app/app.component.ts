import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  orderForm: FormGroup;
  items: FormArray;

  constructor(public formBuilder: FormBuilder){ }

  ngOnInit(){
    this.items =  this.formBuilder.array([this.createItem()])
    this.orderForm = this.formBuilder.group({
      customerName: '',
      email: '',
      items: this.items
    });

  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }

  addItem(): void{
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());

  }




}
