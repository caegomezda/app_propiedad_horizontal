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
        icon: 'assets/icon/person-outline.svg',
        name: 'Perfil',
        id: '/profile'
      },
      {
        icon: 'assets/icon/car-sport-outline.svg',
        name: 'Servicio de taxis',
        id: '/principal'
      },
      {
        icon: 'assets/icon/navigate-outline.svg',
        name: 'Viaje intermunicipal',
        id: '/intermunicipal'
      },
      {
        icon: 'assets/icon/help-outline.svg',
        name: 'Ayuda',
        id: '/contac'
      },
    ];
  }
  
  goToSubject(item){
    this.router.navigateByUrl(item.id, {replaceUrl: true});
  }
}
