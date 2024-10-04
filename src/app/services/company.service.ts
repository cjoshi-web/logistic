import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AddressModel } from '../models/address-model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private databasePath = '/companies';
  private companyRef: AngularFireList<AddressModel>;

  constructor(private db: AngularFireDatabase) {
    this.companyRef = this.db.list(this.databasePath);
  }

  getAll(): Observable<AddressModel[]> {
    return this.companyRef.snapshotChanges().pipe(
      map(changeInReturnValue =>
        changeInReturnValue.map(data =>
          ({ key: data.payload.key, ...data.payload.val() }) as AddressModel
        ))
    );
  }

  create(address: AddressModel): Promise<void> {
    return this.companyRef.push(address) as unknown as Promise<void>;
  }

  update(key: string, value: any): Promise<void> {
    return this.companyRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.companyRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.companyRef.remove();
  }

}
