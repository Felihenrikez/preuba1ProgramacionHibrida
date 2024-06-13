import { Component, OnInit,Input } from '@angular/core';
import { IonItem,IonInput,IonLabel,IonImg,IonButton, IonText } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Circulo } from 'src/app/modelo/clases';


@Component({
  selector: 'app-formulario-circulo',
  templateUrl: './formulario-circulo.component.html',
  styleUrls: ['./formulario-circulo.component.scss'],
  standalone: true,
  imports:[IonItem,IonInput,IonLabel,IonImg,IonButton,IonText,FormsModule]
})
export class FormularioCirculoComponent  implements OnInit {
  txtRadio=""
  perimetro:number|null=null;
  txtMensaje="holo";
  circulo:Circulo|null=null;

  constructor() { }

CalcularPerimetro(){
  const radio = parseFloat(this.txtRadio);
  if(!isNaN(radio)&& radio>0){
    this.circulo = new Circulo("circulo",radio);
    this.perimetro=this.circulo.calcularPerimetro()
    this.txtMensaje=`El perimetro del circulo es ${this.perimetro.toFixed(2)} cm.`;
  } else{
    this.perimetro=null;
    this.txtMensaje=`Ingresa un radio valido.`;
  }
  
}

  ngOnInit() {}

}
