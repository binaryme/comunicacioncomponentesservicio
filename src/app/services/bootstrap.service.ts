import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BootstrapService {
  // defino una variable para enviarla con mis eventos
  isOpen: any = 'isOpen';
  // Creo un stream de eventos para lanzarlos a mi componente modal
  @Output() change: EventEmitter<any> = new EventEmitter();
  constructor() {}
  toggle() {
    // hago un emit de eventos a mi componente modal, para en base a cada stream de eventos ejecutra
    this.change.emit(this.isOpen);
  }
}
