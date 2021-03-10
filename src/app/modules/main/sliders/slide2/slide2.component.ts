import { Component, OnInit } from '@angular/core';
import { ObjectService } from '../../../../services/object.service'

@Component({
  selector: 'app-slide2',
  templateUrl: './slide2.component.html',
  styleUrls: ['./slide2.component.scss']
})

export class Slide2Component implements OnInit {
  public equipo:any
  constructor(public objectService: ObjectService) { }

  ngOnInit(): void { 
    this.getEquipments()
  }

  getEquipments(){
    this.objectService.getObjectObs().subscribe(
      data => {
        this.equipo = data;
        console.log(data)
      }
    )
  }

  alertMessage() {
    window.parent.postMessage('close', '*');
  }

}
