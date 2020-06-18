import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AutosService } from '../services/autos.service';
import { ModalupdateComponent } from '../modalupdate/modalupdate.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmActionComponent } from '../confirm-action/confirm-action.component';

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

    modalRef.result.then(
      (auto)=>{
        this.autoService.updateAutos(auto).subscribe(response=>console.log(response))
      }, 
      (reason)=>{
        console.log(reason);
      }
    )
  }

  openModalAgregar(){
    const modalRef= this.modalService.open(ModalupdateComponent, {centered: true});
    modalRef.componentInstance.accion='Agregar';
    modalRef.result.then(
      (auto)=>{
        this.autoService.addAutos(auto).subscribe(response=>console.log(response))
      },
      (reason)=>{
        console.log(reason);
      }
    )

  }

  openModalConfirmarEliminar(auto: Automovil){
    const modalRef=this.modalService.open(ConfirmActionComponent, {centered: true});
    modalRef.componentInstance.auto=auto;
    modalRef.result.then(
      (autoTemp)=>{
        this.autoService.deleteAutos(autoTemp).subscribe(response=>{
          console.log("se elimino correctamente");
          console.log(response);
        })
      },
      (reason)=>{
        console.log(reason);
      }
    )

  }



}
