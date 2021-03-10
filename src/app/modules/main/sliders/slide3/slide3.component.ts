import { Component, OnInit } from '@angular/core';
import { ObjectService } from '../../../../services/object.service'

@Component({
  selector: 'app-slide3',
  templateUrl: './slide3.component.html',
  styleUrls: ['./slide3.component.scss']
})
export class Slide3Component implements OnInit {

  public equipo:any
  public cuota:any
  constructor(public objectService: ObjectService) { }

  ngOnInit(): void {
    this.getEquipments()
  }

  alertMessage() {
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
