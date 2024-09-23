import { AddressModel } from "../models/AddressModel ";
import { BayanModel } from "../models/BayanModel ";
import { FreightForwarderModel } from "../models/FreightForwarderModel ";
import { PaymentModel } from "../models/PaymentModel ";
import { ShipmentTrackingModel } from "../models/ShipmentTrackingModel ";

export interface InvoiceInterface {
    nominationDate: Date,
    invoiceNumber: string,
    invoiceDate: Date,
    shipperAddress: AddressModel,
    consineeAddress: AddressModel,
    brandName: string[],
    qty: number,
    qtySet: number,
    ctns: number,
    pallets: number,
    amount: number,
    currancy: string,
    netWeight: number,
    grossWeight: number,
    grossWeightPallet: number,
    customerTrackingId: string,
    incoTerms: string,
    freightForwarderDetails: FreightForwarderModel,
    bayanDetails: BayanModel,
    paymentDetails: PaymentModel,
    trackingDetails: ShipmentTrackingModel,
}
