import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Mesa } from '../../modelos/mesa.model';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {
  mesasList: Array<Mesa>;

  constructor(private database: DatabaseService) {}

  ngOnInit() {
    this.database
      .getMesas()
      .snapshotChanges()
      .subscribe(item => {
        this.mesasList = item
          .map(element => {
            return {
              llave: element.key,
              valor: element.payload['node_'].value_
            } as Mesa;
          })
          .sort((a: Mesa, b: Mesa) => {
            return a.valor.localeCompare(b.valor);
          });
        // item.forEach(element => {
        //   const x = element.payload.toJSON();
        //   x['$key'] = element.key;
        //   this.mesasList.push(x as mesasList);
        // });
      });
  }
}
