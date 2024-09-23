import { PaymentInterface } from "../interfaces/payment-interface";

export class PaymentModel implements PaymentInterface{
    paymentDate : Date;
    paymentID : string;
    allFees : number;
    customsDuty : number;
    vatAmount: number;
    paymentAmount: number;
    paymentScreenshot : string;
    paymentPDF : string;

    constructor() {
        this.paymentDate = new Date,
        this.paymentID = "",
        this.allFees = 0,
        this.customsDuty = 0,
        this.vatAmount = 0,
        this.paymentAmount = 0,
        this.paymentScreenshot = "",
        this.paymentPDF = ""
    }
}