import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  nombre: string = '';
  numEntradas: number = 1;
  numPersonas: number = 1;
  tarjetaSocioCineco: boolean = false;
  maxEntradas: number = 7;
  montoTotal: number | null = null;

  actualizarMaxEntradas() {
    this.maxEntradas = this.numPersonas * 7;

    if (this.numEntradas > this.maxEntradas) {
      this.numEntradas = this.maxEntradas;
    }
  }

  obtenerTotal() {
    let precioPorEntrada = 12;
    let descuento = 0;

    if (this.numEntradas > 5) {
      descuento = 0.15;
    } else if (this.numEntradas >= 3) {
      descuento = 0.10;
    }

    let total = this.numEntradas * precioPorEntrada;
    total -= total * descuento;

    if (this.tarjetaSocioCineco) {
      total -= total * 0.10;
    }

    this.montoTotal = total;
  }
}
