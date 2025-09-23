import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {

  num1:string='';
  num2:string='';
  resultado:number=0;
  flexRadioDefault:string="";

  sumar():void{
    this.resultado=parseInt(this.num1)+parseInt(this.num2);
  }
  restar():void{
    this.resultado=parseInt(this.num1)-parseInt(this.num2);
  }
  multiplicar():void{
    this.resultado=parseInt(this.num1)*parseInt(this.num2);
  }
  dividir():void{
    this.resultado=parseInt(this.num1)/parseInt(this.num2);
  }
  
  calcular():void{

    if (this.flexRadioDefault == "suma"){
      this.sumar();
    }
    if (this.flexRadioDefault == "resta"){
      this.restar();
    }
    if (this.flexRadioDefault == "multiplicar"){
      this.multiplicar();
    }
    if (this.flexRadioDefault == "dividir"){
      this.dividir();
    }

  }
}
