import { Component } from '@angular/core';
import { OperacionesResistencias } from './operaciones-resistencias';

@Component({
  selector: 'app-resistencias',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  banda1: number | null = null;
  banda2: number | null = null;
  multiplicador: number | null = null;
  tolerancia: string = '';
  resultado: any = null;

  private operaciones = new OperacionesResistencias();

  // Historial de resultados
  resultados: any[] = [];

  calcular() {
    if (this.banda1 !== null && this.banda2 !== null && this.multiplicador !== null && this.tolerancia) {
      this.resultados.push(this.operaciones.calcular(
        this.banda1,
        this.banda2,
        this.multiplicador,
        this.tolerancia
      ));
    }
  }

  limpiarHistorial() {
    this.resultados = [];
  }


  coloresFondo: { [key: string]: string } = {
    'Negro': 'black',
    'Café': 'brown',
    'Rojo': 'red',
    'Naranja': 'orange',
    'Amarillo': 'yellow',
    'Verde': 'green',
    'Azul': 'blue',
    'Violeta': 'purple',
    'Gris': 'gray',
    'Blanco': 'white'
  };

  getColorBg(colorNombre: string): string {
    return this.coloresFondo[colorNombre] || 'transparent';
  }

  getTextColor(colorNombre: string): string {
    const oscuros = ['Negro','Café','Rojo','Naranja','Verde','Azul','Violeta','Gris'];
    return oscuros.includes(colorNombre) ? 'white' : 'black';
  }

}
