import { Component, OnInit,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonItem,IonInput,IonLabel,IonImg,IonButton, IonText } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { TrianguloEquilatero,TrianguloEscaleno } from 'src/app/modelo/clases';
import { Parser } from '@angular/compiler';

@Component({
  selector: 'app-formulario-triangulo',
  templateUrl: './formulario-triangulo.component.html',
  styleUrls: ['./formulario-triangulo.component.scss'],
  standalone: true,
  imports:[IonItem,IonInput,IonLabel,IonImg,IonButton,IonText,FormsModule,CommonModule]
})
export class FormularioTrianguloComponent  implements OnInit {
  txtLadoA="";
  txtLadoB="";
  txtLadoC="";
  perimetro:number|null=null;
  triangulo:TrianguloEquilatero|TrianguloEscaleno|null=null;
  txtMensaje=" ";

  constructor() { }

  CalcularPerimetro(){
    const ladoA =parseFloat(this.txtLadoA);
    const ladoB =parseFloat(this.txtLadoB);
    const ladoC =parseFloat(this.txtLadoC);

    if(!isNaN(ladoA) && ladoA && !isNaN(ladoB) && ladoB>0 && !isNaN(ladoC) && ladoC>0){
      if(ladoA==ladoB && ladoA==ladoC){
        this.triangulo = new TrianguloEquilatero("triangulo",ladoA);
      }else{
        this.triangulo = new TrianguloEscaleno("triangulo",ladoA,ladoB,ladoC);
      }
        this.perimetro=this.triangulo.calcularPerimetro()
        this.txtMensaje=`El perimetro del circulo es ${this.perimetro.toFixed(2)} cm.`;
    } else{
      this.perimetro=null;
      this.txtMensaje=`los valores de los 3 lados deben ser mayores que 0`;
    }
    
  }
  ngOnInit() {}

}
