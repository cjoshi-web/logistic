import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { ShipmentModel } from '../models/shipment-model';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  private databasePath = '/shipments';
  private shipmentRef: AngularFireList<ShipmentModel>;

  constructor(private db: AngularFireDatabase) {
    this.shipmentRef = this.db.list(this.databasePath);
  }

  getAll(): Observable<ShipmentModel[]> {
    return this.shipmentRef.snapshotChanges().pipe(
      map(changeInReturnValue =>
        changeInReturnValue.map(data =>
          ({ key: data.payload.key, ...data.payload.val() }) as ShipmentModel
        ))
    );
  }

  create(ShipmentModel: ShipmentModel): Promise<void> {
    return this.shipmentRef.push(ShipmentModel) as unknown as Promise<void>;
  }

  update(key: string, value: any): Promise<void> {
    return this.shipmentRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.shipmentRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.shipmentRef.remove();
  }
}
