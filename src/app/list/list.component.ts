import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AUTOMOVILES } from '../data';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  autos: Automovil[];
  autoS: Automovil;
  

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.autos=AUTOMOVILES;
  }

  

  selectAuto(content, auto: Automovil){
    this.modalService.open(content);
    this.autoS=auto;
  }

  

}
