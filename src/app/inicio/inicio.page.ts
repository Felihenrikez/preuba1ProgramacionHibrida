import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonSelect,IonSelectOption, IonItem } from '@ionic/angular/standalone';
import { CirculoComponent } from '../componentes/circulo/circulo.component';
import { TrianguloComponent } from '../componentes/triangulo/triangulo.component';
import { FormularioCirculoComponent } from '../componentes/formulario-circulo/formulario-circulo.component';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonItem, IonContent, IonHeader, IonTitle, IonToolbar,IonSelect,IonSelectOption, CommonModule, FormsModule,CirculoComponent,TrianguloComponent,FormularioCirculoComponent]
})
export class InicioPage implements OnInit {

  seleccion:string=" ";

  constructor() { }

  ngOnInit() {
  }

}
