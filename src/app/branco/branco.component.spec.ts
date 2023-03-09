import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrancoComponent } from './branco.component';

describe('BrancoComponent', () => {
  let component: BrancoComponent;
  let fixture: ComponentFixture<BrancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrancoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
