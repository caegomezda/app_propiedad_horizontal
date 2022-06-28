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

  subjects1:any ={
    icon: '../../assets/icon/temporal-icon.png',
    name: 'Cartelera',
    id: '/cartelera'
  }

  subjects2:any ={
    icon: '../../assets/icon/temporal-icon.png',
    name: 'Pagos',
    id: '/pagos'
  }
//<ion-icon name="accessibility-outline"></ion-icon>
// <ion-icon name="car-outline"></ion-icon>
// <ion-icon name="megaphone-outline"></ion-icon>
// <ion-icon name="gift-outline"></ion-icon>
  buttonMenu:any = [
    {
      icon: 'megaphone-sharp',
      name: 'Asamblea',
      id: '/asambleas'
    },
    {
      icon: 'gift-sharp',
      name: 'Promociones',
      id: '/promociones'
    },
    {
      icon: 'car-sharp',
      name: 'Pico y placa',
      id: '/picoyplaca'
    },
    {
      icon: 'accessibility-sharp',
      name: 'Perfil',
      id: '/perfil'
    }
  ]
  // subjects3:any ={
  //   icon: '../../assets/icon/temporal-icon.png',
  //   name: 'PQRS',
  //   id: '/pqrs'
  // }

  isload:Boolean = false;
  constructor(
    private router: Router,
    private utilities : UtilitiesService) { }

  ngOnInit() {
  }
  
  ionViewWillEnter(){
    this.isload = true
  }
  //<a href="https://www.flaticon.es/iconos-gratis/sensible" title="sensible iconos">Sensible iconos creados por xnimrodx - Flaticon</a>
  goToSubject(item){
    console.log('item',item);
    this.router.navigateByUrl(item, {replaceUrl: true});
  }

  goInfoCartelera(item){
    console.log('item',item);
  }

  signOut(){
    console.log('SALIR APLICACION');
  }
}
