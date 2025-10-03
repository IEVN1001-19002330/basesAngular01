export class OperacionesResistencias {
  private colores: { [key: number]: string } = {
    0: 'Negro',
    1: 'Café',
    2: 'Rojo',
    3: 'Naranja',
    4: 'Amarillo',
    5: 'Verde',
    6: 'Azul',
    7: 'Violeta',
    8: 'Gris',
    9: 'Blanco'
  };

  private colTolerancia: { [key: string]: string } = {
    'Oro 5%': '#FFD700',
    'Plata 10%': '#C0C0C0'
  };

  private colorescolor3: { [key: number]: string } = {
    1: 'Negro',
    10: 'Café',
    100: 'Rojo',
    1000: 'Naranja',
    10000: 'Amarillo',
    100000: 'Verde',
    1000000: 'Azul',
    10000000: 'Violeta',
    100000000: 'Gris',
    1000000000: 'Blanco'
  };

  calcular(color1: number, color2: number, color3: number, tolerancia: string): any {
    const realizaCalculo = `${color1}${color2}`;
    const ohm = parseInt(realizaCalculo) * color3;

    let toleranciaFinal = 0;
    let toleranciaFinalMin = 0;

    if (tolerancia === 'Oro 5%') {
      toleranciaFinal = ohm + (ohm * 0.05);
      toleranciaFinalMin = ohm - (ohm * 0.05);
    } else if (tolerancia === 'Plata 10%') {
      toleranciaFinal = ohm + (ohm * 0.10);
      toleranciaFinalMin = ohm - (ohm * 0.10);
    }

    return {
      color1: this.colores[color1],
      color2: this.colores[color2],
      color3: this.colorescolor3[color3],
      colTolerancia: this.colTolerancia[tolerancia],
      toleranciaNombre: tolerancia,
      valor: ohm,
      valorMaximo: toleranciaFinal,
      valorMinimo: toleranciaFinalMin
    };
  }
}
