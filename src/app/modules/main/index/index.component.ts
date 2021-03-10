import { Component, OnInit, HostListener, ElementRef  } from '@angular/core';
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

  constructor(
    public apiService: ApiService, 
    public objectService:ObjectService,
    private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.spinner = true;
    $('.carousel').carousel({
    })
    this.getEquipments()
    this.button = '<button type="button" id="btnCerrar" class="btn btn-primary mr-3" href="javascript:window.print.postMessage("close"); void (0)">Ir al equipo</button>'
  }

/*
  ngAfterViewChecked (){
    if(this.elementRef.nativeElement.querySelector('#btnCerrar')){
      this.elementRef.nativeElement.querySelector('#btnCerrar').addEventListener('onclick', window.print.postMessage('close'));
    }
  } */

  /*
  @HostListener('window:message', ['$event'])
    onMessage(event) {
      window.print.postMessage('close');
  }*/

  alertMessage() {
    console.log('llegó a la funcion')
    window.parent.postMessage('close', '*');
    //window.print.postMessage('close')
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
