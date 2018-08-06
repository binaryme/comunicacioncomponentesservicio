import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  mesasList: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) {}

  getMesas() {
    return (this.mesasList = this.firebase.list('mesas'));
  }
}
