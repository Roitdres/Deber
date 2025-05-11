import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListavideojuegoComponent } from './listavideojuego.component';

describe('ListavideojuegoComponent', () => {
  let component: ListavideojuegoComponent;
  let fixture: ComponentFixture<ListavideojuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListavideojuegoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListavideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
