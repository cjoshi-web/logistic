import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddressModel } from './models/AddressModel ';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  addressForm: FormGroup = new FormGroup({});
  addressObj: AddressModel = new AddressModel();
  addresses: AddressModel[] = [];

  constructor(){
    this.createForm();
    
    const data = localStorage.getItem("AddressDatabase");
    if(data != null){
      const parseData = JSON.parse(data);
      this.addresses = parseData;
    }
  }

  createForm(){
    this.addressForm = new FormGroup({
      addressId: new FormControl(this.addressObj.addressId),
      companyName: new FormControl(this.addressObj.companyName,[Validators.required]),
      address: new FormControl(this.addressObj.address),
      state: new FormControl(this.addressObj.state),
      country: new FormControl(this.addressObj.country),
      vatin: new FormControl(this.addressObj.vatin),
      contactPerson: new FormControl(this.addressObj.contactPerson),
      contactNumber: new FormControl(this.addressObj.contactNumber),
      contactEmail: new FormControl(this.addressObj.contactEmail),

    });
  }

  onSave(){
    const data = localStorage.getItem("AddressDatabase");
    if(data !=null){
      const parseData = JSON.parse(data);
      this.addressForm.controls['addressId'].setValue(parseData.length + 1);
      this.addresses.unshift(this.addressForm.value);
    }
    else {
      this.addresses.unshift(this.addressForm.value);
    }
    localStorage.setItem("AddressDatabase",JSON.stringify(this.addresses));
    this.reset()
  }

  onEdit(editItem: AddressModel) {
    this.addressObj = editItem;
    this.createForm();
  }

  onUpdate(){
    const record = this.addresses.find(address => address.addressId == this.addressForm.controls['addressId'].value)
    if(record != undefined) {
      record.companyName = this.addressForm.controls['companyName'].value
      record.address = this.addressForm.controls['address'].value
      record.state = this.addressForm.controls['state'].value
      record.country = this.addressForm.controls['country'].value
      record.vatin = this.addressForm.controls['vatin'].value
      record.contactPerson = this.addressForm.controls['contactPerson'].value
      record.contactNumber = this.addressForm.controls['contactNumber'].value
      record.contactEmail = this.addressForm.controls['contactEmail'].value
    }
    localStorage.setItem("AddressDatabase",JSON.stringify(this.addresses));
    this.reset();
  }

  onDelete(id: number){
    const isDelete = confirm("Are you sure you want to delete? ");
    if(isDelete) {
      const index = this.addresses.findIndex(address => address.addressId === id)
      this.addresses.splice(index,1);
      localStorage.setItem("AddressDatabase",JSON.stringify(this.addresses))
    }
  }

  reset() {
    this.addressObj = new AddressModel();
    this.createForm();
  }

}
