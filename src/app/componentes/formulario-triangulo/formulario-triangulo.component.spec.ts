import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormularioTrianguloComponent } from './formulario-triangulo.component';

describe('FormularioTrianguloComponent', () => {
  let component: FormularioTrianguloComponent;
  let fixture: ComponentFixture<FormularioTrianguloComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormularioTrianguloComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioTrianguloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
