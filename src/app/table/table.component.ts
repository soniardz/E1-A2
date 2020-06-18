import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AutosService } from '../services/autos.service';
import { ModalupdateComponent } from '../modalupdate/modalupdate.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autos: Automovil[];
  auto: Automovil;
  page: number;
  pageSize: number;

  constructor(private autoService: AutosService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.page=1;
    this.pageSize=10;
    this.autoService.getAutos().subscribe((response)=>{
      this.autos=response.data;
  })
}

  openModalEditar(auto){
    const modalRef= this.modalService.open(ModalupdateComponent, {centered: true});
    modalRef.componentInstance.auto=auto;
    modalRef.componentInstance.accion='Editar';
  }

  openModalAgregar(){
    const modalRef= this.modalService.open(ModalupdateComponent, {centered: true});
    modalRef.componentInstance.accion='Agregar';
  }
}
