import { FreightForwarderInterface } from "../interfaces/freight-forwarder-interface";

export class FreightForwarderModel implements FreightForwarderInterface{
    gsNumber : string;
    serviceBy : string;
    freightForwarderName : string;
    msasterAWB : string;
    houseAWB : string;
    chargeableWeight: number;
    volumeInCubicMeter: number;
    portOfLoading : string;
    portOfDischarge : string;
    truckDriverName: string;
    truckNumber: string;
    truckDriverContactNumber: string[];

    constructor(){
        this.gsNumber = "";
        this.serviceBy = "";
        this.freightForwarderName = "";
        this.msasterAWB = "";
        this.houseAWB = "";
        this.chargeableWeight = 0;
        this.volumeInCubicMeter = 0;
        this.portOfLoading = "";
        this.portOfDischarge = "";
        this.truckDriverName = "";
        this.truckNumber = "";
        this.truckDriverContactNumber = [];
    }
}