export interface ShipmentTrackingInterface {
    ETD_estimatedTimeOfDeparture : Date,
    ATD_actualTimeOfDeparture : Date,
    ETA_estimatedTimeOfArrival : Date,
    ATA_actualTimeOfArrival : Date,
    clearanceDate: Date,
    dcInDate: Date,
    storeInDate : Date,
}
