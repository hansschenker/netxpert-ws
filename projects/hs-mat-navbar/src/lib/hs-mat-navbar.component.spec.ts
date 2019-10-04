import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsMatNavbarComponent } from './hs-mat-navbar.component';

describe('HsMatNavbarComponent', () => {
  let component: HsMatNavbarComponent;
  let fixture: ComponentFixture<HsMatNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsMatNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsMatNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
