/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DevModeComponent } from './dev-mode.component';

describe('DevModeComponent', () => {
  let component: DevModeComponent;
  let fixture: ComponentFixture<DevModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
