import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PestalComponent } from './pestal.component';

describe('PestalComponent', () => {
  let component: PestalComponent;
  let fixture: ComponentFixture<PestalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PestalComponent]
    });
    fixture = TestBed.createComponent(PestalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
