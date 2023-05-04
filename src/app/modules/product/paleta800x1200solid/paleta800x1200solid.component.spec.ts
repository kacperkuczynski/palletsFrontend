import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paleta800x1200solidComponent } from './paleta800x1200solid.component';

describe('Paleta800x1200solidComponent', () => {
  let component: Paleta800x1200solidComponent;
  let fixture: ComponentFixture<Paleta800x1200solidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paleta800x1200solidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paleta800x1200solidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
