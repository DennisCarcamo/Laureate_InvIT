import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css'],
})
export class ModalContentComponent implements OnInit {
  @Input() public name;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    console.log('hola estoy en el modelo' + name);
  }

  passBack(){
    this.passEntry.emit(this.name);
    this.activeModal.close(this.name);
  }
}
