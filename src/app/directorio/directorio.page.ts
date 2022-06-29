import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.page.html',
  styleUrls: ['./directorio.page.scss'],
})
export class DirectorioPage implements OnInit {
  dataDirectorio = [
    {
      icon:"library-outline",
      name:"Adminitrador",
      phone:"3022182344",
      horarioAtencion:"luneas a viernes 10am-12am & 14pm-17pm"
    },
    {
      icon:"lock-closed-outline",
      name:"Porteria 1",
      phone:"089",
      horarioAtencion:"24h"
    },
    {
      icon:"lock-closed-outline",
      name:"Porteria 2",
      phone:"065",
      horarioAtencion:"24h"
    },
    {
      icon:"shield-checkmark-outline",
      name:"Policia",
      phone:"123",
      horarioAtencion:"24h"
    },
    {
      icon:"flame-outline",
      name:"Adminitrador",
      phone:"8873412",
      horarioAtencion:"24h"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  onClick(contact){
    console.log('Este es el contacto al que se hara la llamada, agregar servicio de llamadas',contact);
  }

}
