import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {

  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  resultado: number | null = null;

  calcularDistancia() {
    let dx = this.x2 - this.x1;
    let dy = this.y2 - this.y1;
    let distancia = Math.sqrt(dx * dx + dy * dy);
    this.resultado = parseFloat(distancia.toFixed(2));
  }


}
