import { AddressInterface } from "../interfaces/address-interface";

export class AddressModel implements AddressInterface {

    addressId: number;
    companyName: string;
    address: string;
    state: string;
    country: string;
    vatin: string;
    contactPerson: string;
    contactNumber: string;
    contactEmail: string;

    constructor(){
        this.addressId = 0;
        this.companyName = '';
        this.address = '';
        this.state = '';
        this.country = '';
        this.vatin = '';
        this.contactPerson = '';
        this.contactNumber = '';
        this.contactEmail = '';
    }
}