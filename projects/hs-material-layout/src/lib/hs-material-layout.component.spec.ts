import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsMaterialLayoutComponent } from './hs-material-layout.component';

describe('HsMaterialLayoutComponent', () => {
  let component: HsMaterialLayoutComponent;
  let fixture: ComponentFixture<HsMaterialLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsMaterialLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsMaterialLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
