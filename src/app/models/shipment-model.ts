import { AddressModel } from "./address-model";
import { BayanModel } from "./bayan-model";
import { FreightModel } from "./freight-model";
import { PaymentModel } from "./payment-model";
import { TrackingModel } from "./tracking-model";


export interface ShipmentModel {
    invoiceNumber: string,
    invoiceDate: Date,
    shipperAddress: AddressModel,
    consigneeAddress: AddressModel,
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
    freightForwarderDetails: FreightModel,
    bayanDetails: BayanModel,
    paymentDetails: PaymentModel,
    trackingDetails: TrackingModel,
}
