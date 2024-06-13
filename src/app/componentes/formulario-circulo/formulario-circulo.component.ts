import { Component, OnInit,Input } from '@angular/core';
import { IonItem,IonInput,IonLabel,IonImg,IonButton } from '@ionic/angular/standalone';
import { circulo } from 'src/app/modelo/clases';


@Component({
  selector: 'app-formulario-circulo',
  templateUrl: './formulario-circulo.component.html',
  styleUrls: ['./formulario-circulo.component.scss'],
  standalone: true,
  imports:[IonItem,IonInput,IonLabel,IonImg,IonButton]
})
export class FormularioCirculoComponent  implements OnInit {
  txtradio=""
  perimetro=0
  circulo =new circulo("circulo",0)
  txtMensaje=" "

  constructor() { }
CalcularPerimetro(){
  this.circulo.radio=parseInt(this.txtradio)
  this.perimetro=this.circulo.calcularPerimetro()
}

  ngOnInit() {}

}
