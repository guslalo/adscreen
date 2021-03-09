import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service'

@Component({
  selector: 'app-slide3',
  templateUrl: './slide3.component.html',
  styleUrls: ['./slide3.component.scss']
})
export class Slide3Component implements OnInit {

  public equipo:any
  public cuota:any
  constructor(public apiService: ApiService) { }


  ngOnInit(): void {
    this.getEquipments()
  }

  alertMessage() {
    window.parent.postMessage('close', '*');
  }

  getEquipments(){
    this.apiService.getEquipments().subscribe(
      data => {
        this.equipo = data
        this.cuota = this.equipo.equipment.equipment_details[0].adscreen[0].equipment_plan[0].price_1 / this.equipo.equipment.equipment_details[0].adscreen[0].equipment_plan[0].cuote_number
        console.log(this.equipo )
      }, 
      error => {
        console.log(error)
      }
    )
  }

}
