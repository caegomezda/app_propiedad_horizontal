import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilitiesService } from '../service/utilities.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  subjects;
  //crear formulario con la data a visuliuzar
  dataCartelera:any = [
    {
      icon: '../../assets/icon/temporal-icon.png',
      name: '#servicio_por_definir',
      id: '/profile',
      img:'../../assets/img/anuncio_prueba1.pn'
    },
    {
      icon: '../../assets/icon/temporal-icon.png',
      name: '#servicio_por_definir',
      id: '/profile',
      img:'../../assets/img/anuncio_prueba1.pn'
    },
    {
      icon: '../../assets/icon/temporal-icon.png',
      name: '#servicio_por_definir',
      id: '/profile',
      img:'../../assets/img/anuncio_prueba1.pn'
    },
  ]

  isload:Boolean = false;
  constructor(
    private router: Router,
    private utilities : UtilitiesService) { }

  ngOnInit() {
    this.subjects=[
      {
        icon: '../../assets/icon/temporal-icon.png',
        name: 'Cartelera',
        id: '/cartelera'
      },
      {
        icon: '../../assets/icon/temporal-icon.png',
        name: 'Asambleas',
        id: '/asambleas'
      },
      {
        icon: '../../assets/icon/temporal-icon.png',
        name: 'PQRS',
        id: '/contactanos'
      },
      {
        icon: '../../assets/icon/temporal-icon.png',
        name: 'Otros',
        id: '/otros'
      },      
    ];
  }
  ionViewWillEnter(){
    this.isload = true
  }
  //<a href="https://www.flaticon.es/iconos-gratis/sensible" title="sensible iconos">Sensible iconos creados por xnimrodx - Flaticon</a>
  goToSubject(item){
    this.router.navigateByUrl(item.id, {replaceUrl: true});
  }

  goInfoCartelera(item){
    console.log('item',item);
  }

  signOut(){
    console.log('SALIR APLICACION');
  }
}
