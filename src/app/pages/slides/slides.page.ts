import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  slides:{img: string; titulo: string; desc: string}[] = [
  {
    img: 'assets/shapes.svg',
    titulo: 'Comparte tus fotos',
    desc: 'Mira y comparte tus incleibles fotos del mundo'
  },
    {
      img: 'assets/shapes.svg',
      titulo: 'La mejor musica',
      desc: 'Mira y comparte tus increibles canciones'
    },
    {
      img: 'assets/shapes.svg',
      titulo: 'Nunca olvides nada',
      desc: 'El mejor calendario a tu alcance'
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
