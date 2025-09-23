import { Pipe, PipeTransform } from '@angular/core'; //este archivo permite crear archivos de pipe
import { Iheroes } from './iheroes';

@Pipe({ //este es un decorador
  name: 'heroesFilter', //el nombre con el que se hace referencia nuestro pipe
  standalone: false //no manejamos modulos, por eso es false
})
export class HeroesFilterPipe implements PipeTransform { //'implements' es el que almacena el nombre de nuestro pipe

  transform(value:Iheroes[] , args: string): Iheroes[] { 
    
    let filter:string=args?args.toLocaleLowerCase():'';

    return filter?value.filter((hero:Iheroes)=>hero.nombre.toLocaleLowerCase().indexOf(filter)!==-1):value;
  }

}
