import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asambleas',
  templateUrl: './asambleas.page.html',
  styleUrls: ['./asambleas.page.scss'],
})
export class AsambleasPage implements OnInit {
  dataAsmbleas:any = [
    {
      asaName:"nombre_asamblea1",
      fecha:"fecha_realizacion1",
      admName:"nombre_de_administrador1",
      miemConcejo:[
        {
          name:"nombre_miem_concejo1",
          cargo:"cargo_miem_concejo"
        },
        {
          name:"nombre_miem_concejo2",
          cargo:"cargo_miem_concejo"
        },
        {
          name:"nombre_miem_concejo3",
          cargo:"cargo_miem_concejo"
        }
      ],
      pdf:"aqui_va_el_pdf",
      dataPorDefinir:"data_por_definir"
    },
    {
      asaName:"nombre_asamblea2",
      fecha:"fecha_realizacion2",
      admName:"nombre_de_administrador2",
      miemConcejo:[
        {
          name:"nombre_miem_concejo1",
          cargo:"cargo_miem_concejo"
        },
        {
          name:"nombre_miem_concejo2",
          cargo:"cargo_miem_concejo"
        },
        {
          name:"nombre_miem_concejo3",
          cargo:"cargo_miem_concejo"
        }
      ],
      pdf:"aqui_va_el_pdf",
      dataPorDefinir:"data_por_definir"
    },
    {
      asaName:"nombre_asamblea3",
      fecha:"fecha_realizacion3",
      admName:"nombre_de_administrador3",
      miemConcejo:[
        {
          name:"nombre_miem_concejo1",
          cargo:"cargo_miem_concejo"
        },
        {
          name:"nombre_miem_concejo2",
          cargo:"cargo_miem_concejo"
        },
        {
          name:"nombre_miem_concejo3",
          cargo:"cargo_miem_concejo"
        }
      ],
      pdf:"aqui_va_el_pdf",
      dataPorDefinir:"data_por_definir"
    },
    {
      asaName:"nombre_asamblea4",
      fecha:"fecha_realizacion4",
      admName:"nombre_de_administrador4",
      miemConcejo:[
        {
          name:"nombre_miem_concejo1",
          cargo:"cargo_miem_concejo"
        },
        {
          name:"nombre_miem_concejo2",
          cargo:"cargo_miem_concejo"
        },
        {
          name:"nombre_miem_concejo3",
          cargo:"cargo_miem_concejo"
        }
      ],
      pdf:"aqui_va_el_pdf",
      dataPorDefinir:"data_por_definir"
    }
  ]
  
  dataProAsamble:any = [{
    asaName:"nombre_asamblea_pro",
    fecha:"fecha_realizacion_pro",
    admName:"nombre_de_administrador_pro",
    miemConcejo:[
      {
        name:"nombre_miem_concejo_pro",
        cargo:"cargo_miem_concejo"
      },
      {
        name:"nombre_miem_concejo_pro",
        cargo:"cargo_miem_concejo"
      },
      {
        name:"nombre_miem_concejo_pro",
        cargo:"cargo_miem_concejo"
      }
    ],
    pdf:"aqui_va_el_pdf_pro",
    dataProDefinir:"data_pro_definir_pro"
  }]
  constructor() { }

  ngOnInit() {
  }

}
