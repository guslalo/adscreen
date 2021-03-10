import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { ObjectService } from '../../../services/object.service'

declare var $:any


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public equipo:any
  public cuota:any
  public spinner:boolean = true
  public button:any;

  constructor(public apiService: ApiService, public objectService:ObjectService) { }

  ngOnInit(): void {
    this.spinner = true;
    $('.carousel').carousel({
    })
    this.getEquipments()
    this.button = '<button type="button" class="btn btn-primary mr-3" (click)="postMessage()">Ir al equipo</button>'
  }

  /*
  @HostListener('window:message', ['$event'])
    onMessage(event) {
      window.print.postMessage('close');
  }*/

  postMessage() {
    window.parent.postMessage('close', 'https://eloquent-golick-649894.netlify.app/');
  }
 
  getEquipments(){
    this.apiService.getEquipments().subscribe(
      data => {
        this.equipo = data
        let valor = this.equipo.equipment.equipment_details[0].adscreen[0].equipment_plan[0].price_1;
        let cantCouta = this.equipo.equipment.equipment_details[0].adscreen[0].equipment_plan[0].cuote_number
        let stringToNumber = valor.split('.').join('')
        this.cuota = +stringToNumber / cantCouta
        this.objectService.setObjectObs(data)
        console.log(this.objectService.object)
        this.spinner = false;
      }, 
      error => {
        console.log(error)
      }
    )
  }

}
