import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GammaComponentComponent } from './gamma-component.component';

describe('GammaComponentComponent', () => {
  let component: GammaComponentComponent;
  let fixture: ComponentFixture<GammaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GammaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GammaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
