import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsMatShellComponent } from './hs-mat-shell.component';

describe('HsMatShellComponent', () => {
  let component: HsMatShellComponent;
  let fixture: ComponentFixture<HsMatShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsMatShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsMatShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
