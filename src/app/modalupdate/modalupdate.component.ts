import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../models';


@Component({
  selector: 'app-modalupdate',
  templateUrl: './modalupdate.component.html',
  styleUrls: ['./modalupdate.component.css']
})
export class ModalupdateComponent implements OnInit {

  desde: number;
  hasta: number;
  accion: String;
  auto: Automovil={} as Automovil;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onSubmit(formAutos){
    let modelos: number[]=this.arregloModelos();
    this.auto.modelos=modelos;
    this.activeModal.close(this.auto);
  }

  arregloModelos(): number[]{
    let modelos: number[];
    modelos=[];
    for(let i= this.desde; i<=this.hasta; i++){
      modelos.push(i);
    }

    return modelos;
  }

}
