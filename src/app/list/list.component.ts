import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../services/autos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  autos: Automovil[];
  autoS: Automovil;
  page: number;
  pageSize: number;
  

  constructor(private modalService: NgbModal, private autoService: AutosService) { }

  ngOnInit() {
    this.page=1;
    this.pageSize=10;
    this.autoService.getAutos().subscribe((response)=>{
      this.autos=response.data;
    })

  }

  

  selectAuto(content, auto: Automovil){
    this.modalService.open(content);
    this.autoS=auto;
  }

  

}
