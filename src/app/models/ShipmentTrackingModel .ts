import { ShipmentTrackingInterface } from "../interfaces/shipment-tracking-interface";

export class ShipmentTrackingModel implements ShipmentTrackingInterface{
    ETD_estimatedTimeOfDeparture : Date;
    ATD_actualTimeOfDeparture : Date;
    ETA_estimatedTimeOfArrival : Date;
    ATA_actualTimeOfArrival : Date;
    clearanceDate: Date;
    dcInDate: Date;
    storeInDate : Date;

    constructor(){
        this.ETD_estimatedTimeOfDeparture = new Date;
        this.ATD_actualTimeOfDeparture = new Date;
        this.ETA_estimatedTimeOfArrival = new Date;
        this.ATA_actualTimeOfArrival = new Date;
        this.clearanceDate = new Date;
        this.dcInDate = new Date;
        this.storeInDate = new Date;
    }
}