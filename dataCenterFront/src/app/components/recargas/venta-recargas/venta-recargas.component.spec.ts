import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaRecargasComponent } from './venta-recargas.component';

describe('VentaRecargasComponent', () => {
  let component: VentaRecargasComponent;
  let fixture: ComponentFixture<VentaRecargasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaRecargasComponent]
    });
    fixture = TestBed.createComponent(VentaRecargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
