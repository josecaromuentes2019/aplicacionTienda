import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearproductosComponent } from './crearproductos.component';

describe('CrearproductosComponent', () => {
  let component: CrearproductosComponent;
  let fixture: ComponentFixture<CrearproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
