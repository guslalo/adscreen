import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service'
declare var $:any

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public equipo:any
  public cuota:any

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    $('.carousel').carousel({
      interval: 10000
    })

    this.getEquipments()
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
