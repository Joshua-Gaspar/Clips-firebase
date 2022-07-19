import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() modalID = '';

  constructor(public modalService: ModalService, public element: ElementRef) {
  }

  ngOnInit(): void {
    document.body.appendChild(this.element.nativeElement);
  } 

  closeModal(){
    this.modalService.toggleModal(this.modalID);
  }

}
