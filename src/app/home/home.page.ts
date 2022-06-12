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
  constructor(
    private router: Router,
    private utilities : UtilitiesService) { }

  ngOnInit() {
    this.subjects=[
      {
        icon: '../../assets/icon/temporal-icon.png',
        name: '#servicio_por_definir',
        id: '/profile'
      },
      {
        icon: '../../assets/icon/temporal-icon.png',
        name: '#servicio_por_definir',
        id: '/principal'
      },
      {
        icon: '../../assets/icon/temporal-icon.png',
        name: '#servicio_por_definir',
        id: '/intermunicipal'
      },
      {
        icon: '../../assets/icon/temporal-icon.png',
        name: '#servicio_por_definir',
        id: '/contac'
      },      
      {
        icon: '../../assets/icon/temporal-icon.png',
        name: '#servicio_por_definir',
        id: '/profile'
      },
      {
        icon: '../../assets/icon/temporal-icon.png',
        name: '#servicio_por_definir',
        id: '/principal'
      },
      {
        icon: '../../assets/icon/temporal-icon.png',
        name: '#servicio_por_definir',
        id: '/intermunicipal'
      },
      {
        icon: '../../assets/icon/temporal-icon.png',
        name: '#servicio_por_definir',
        id: '/contac'
      },
    ];
  }
  //<a href="https://www.flaticon.es/iconos-gratis/sensible" title="sensible iconos">Sensible iconos creados por xnimrodx - Flaticon</a>
  goToSubject(item){
    this.router.navigateByUrl(item.id, {replaceUrl: true});
  }
}
