import { InvoiceInterface } from "../interfaces/invoice-interface";
import { AddressModel } from "./AddressModel ";
import { BayanModel } from "./BayanModel ";
import { FreightForwarderModel } from "./FreightForwarderModel ";
import { PaymentModel } from "./PaymentModel ";
import { ShipmentTrackingModel } from "./ShipmentTrackingModel ";

export class InvoiceModel implements InvoiceInterface {

    nominationDate: Date;
    invoiceNumber: string;
    invoiceDate: Date;
    shipperAddress: AddressModel;
    consineeAddress: AddressModel;
    brandName: string[];
    qty: number;
    qtySet: number;
    ctns: number;
    pallets: number;
    amount: number;
    currancy: string;
    netWeight: number;
    grossWeight: number;
    grossWeightPallet: number;
    customerTrackingId: string;
    incoTerms: string;
    freightForwarderDetails: FreightForwarderModel;
    bayanDetails: BayanModel;
    paymentDetails: PaymentModel;
    trackingDetails: ShipmentTrackingModel;

    constructor(){

        this.nominationDate = new Date
        this.invoiceNumber = "";
        this.invoiceDate = new Date
        this.shipperAddress = new AddressModel;
        this.consineeAddress =  new AddressModel;
        this.brandName = [];
        this.qty = 0;
        this.qtySet = 0;
        this.ctns = 0;
        this.pallets = 0;
        this.amount = 0;
        this.currancy = "OMR";
        this.netWeight = 0;
        this.grossWeight = 0;
        this.grossWeightPallet = 0;
        this.customerTrackingId = "";
        this.incoTerms = "";
        this.freightForwarderDetails = new FreightForwarderModel
        this.bayanDetails = new BayanModel;
        this.paymentDetails = new PaymentModel;
        this.trackingDetails = new ShipmentTrackingModel;
    }
}