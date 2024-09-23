import { BayanInterface } from "../interfaces/bayan-interface";

export class BayanModel implements BayanInterface{

    declarationDate : Date;
    declarationNumber : string;
    invoiceAmountInOMR : number;
    freightChargesInOMR : number;
    insuranceChargesInOMR : number;
    totalCIFValueInOMR : number;
    invoicePDF : string;
    declarationScreenshot : string;
    delcarationPDF : string;
    
    constructor(){
        this.declarationDate = new Date;
        this.declarationNumber = "";
        this.invoiceAmountInOMR = 0;
        this.freightChargesInOMR = 0;
        this.insuranceChargesInOMR = 0;
        this.totalCIFValueInOMR = 0;
        this.invoicePDF = ""
        this.declarationScreenshot = ""
        this.delcarationPDF = ""
    }
}