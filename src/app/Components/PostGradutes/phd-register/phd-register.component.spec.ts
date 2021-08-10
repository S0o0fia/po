import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdRegisterComponent } from './phd-register.component';

describe('PhdRegisterComponent', () => {
  let component: PhdRegisterComponent;
  let fixture: ComponentFixture<PhdRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhdRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhdRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
