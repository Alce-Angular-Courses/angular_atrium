import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPlusComponent } from './buscar-plus.component';

describe('BuscarPlusComponent', () => {
  let component: BuscarPlusComponent;
  let fixture: ComponentFixture<BuscarPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
