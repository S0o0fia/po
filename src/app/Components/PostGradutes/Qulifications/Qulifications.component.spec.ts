/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QulificationsComponent } from './Qulifications.component';

describe('QulificationsComponent', () => {
  let component: QulificationsComponent;
  let fixture: ComponentFixture<QulificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QulificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QulificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
