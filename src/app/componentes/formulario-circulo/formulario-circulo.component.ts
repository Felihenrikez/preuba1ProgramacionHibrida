import { Component, OnInit, input } from '@angular/core';
import { IonItem,IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-formulario-circulo',
  templateUrl: './formulario-circulo.component.html',
  styleUrls: ['./formulario-circulo.component.scss'],
  standalone: true,
  imports:[IonInput,IonItem]
})
export class FormularioCirculoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
