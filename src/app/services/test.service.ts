import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Tutorial } from '../firebase-connection/test.component';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  
  private databasePath = '/tutorials';
  private tutorialsRef: AngularFireList<Tutorial>;

  constructor(private db: AngularFireDatabase) {
    this.tutorialsRef = this.db.list(this.databasePath);
  }

  getAll(): Observable<Tutorial[]> {
    return this.tutorialsRef.snapshotChanges().pipe(
      map(changeInReturnValue =>
        changeInReturnValue.map(data =>
          ({ key: data.payload.key, ...data.payload.val() }) as Tutorial
        ))
    );
  }

  create(tutorial: Tutorial): Promise<void> {
    return this.tutorialsRef.push(tutorial) as unknown as Promise<void>;
  }

  update(key: string, value: any): Promise<void> {
    return this.tutorialsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.tutorialsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.tutorialsRef.remove();
  }

}
