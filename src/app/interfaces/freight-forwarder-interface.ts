export interface FreightForwarderInterface {
    gsNumber : string,
    serviceBy : string,
    freightForwarderName : string,
    msasterAWB : string,
    houseAWB : string,
    chargeableWeight: number,
    volumeInCubicMeter: number,
    portOfLoading : string,
    portOfDischarge : string,
    truckDriverName: string,
    truckNumber: string,
    truckDriverContactNumber: string[],
}
