import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaRegisterComponent } from './diploma-register.component';

describe('DiplomaRegisterComponent', () => {
  let component: DiplomaRegisterComponent;
  let fixture: ComponentFixture<DiplomaRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplomaRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
