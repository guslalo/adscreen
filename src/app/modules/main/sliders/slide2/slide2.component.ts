import { Component, OnInit } from '@angular/core';
import { ObjectService } from '../../../../services/object.service'

@Component({
  selector: 'app-slide2',
  templateUrl: './slide2.component.html',
  styleUrls: ['./slide2.component.scss']
})

export class Slide2Component implements OnInit {
  public equipo:any
  public button:any;
  constructor(public objectService: ObjectService) { }

  ngOnInit(): void { 
    this.getEquipments()
    this.button = "<button type='button' class='btn btn-primary mr-3' onClick='alertMessage()''>Ir al equipo</button>"
  }

  alertMessage() {
    console.log('llegó a la funcion')
    window.parent.postMessage('close', '*');
  }
 

  getEquipments(){
    this.objectService.getObjectObs().subscribe(
      data => {
        this.equipo = data;
        console.log(data)
      }
    )
  }

 
 

}
