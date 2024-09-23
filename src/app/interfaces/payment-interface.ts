export interface PaymentInterface {
    paymentDate : Date,
    paymentID : string,
    allFees : number,
    customsDuty : number,
    vatAmount: number,
    paymentAmount: number,
    paymentScreenshot : string,
    paymentPDF : string,
}
