import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  OnDestroy
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapService } from '../../services/bootstrap.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  isOpen;
  @ViewChild(TemplateRef) modalInstance;
  constructor(
    private modalService: NgbModal,
    public bootstrapservice: BootstrapService
  ) {}

  ngOnInit() {
    this.bootstrapservice.change.subscribe(isOpen => {
      this.isOpen = isOpen;
      this.modalService.open(this.modalInstance);
      console.log(this.isOpen);
    });
  }

  ngOnDestroy() {
    this.bootstrapservice.change.unsubscribe();
  }
}
