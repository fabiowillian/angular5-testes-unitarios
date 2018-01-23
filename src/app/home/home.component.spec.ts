import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('deve incrementar o valor do número', () => {
    component.numero = 0;
    component.aumentar();

    expect(component.numero).toBe(1);
  });

  it('deve decrementar o valor do número', () => {
    component.numero = 1;
    component.diminuir();

    expect(component.numero).toBe(0);
  });

  it('deve manter o número com um valor igual ou maior que zero', () => {
    component.numero = 0;
    component.diminuir();
    expect(component.numero).toBe(0);
  });
});
