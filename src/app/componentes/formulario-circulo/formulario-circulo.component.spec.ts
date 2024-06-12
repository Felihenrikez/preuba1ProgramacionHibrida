import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormularioCirculoComponent } from './formulario-circulo.component';

describe('FormularioCirculoComponent', () => {
  let component: FormularioCirculoComponent;
  let fixture: ComponentFixture<FormularioCirculoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormularioCirculoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioCirculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
