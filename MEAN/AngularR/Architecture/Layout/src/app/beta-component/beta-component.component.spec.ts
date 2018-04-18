import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaComponentComponent } from './beta-component.component';

describe('BetaComponentComponent', () => {
  let component: BetaComponentComponent;
  let fixture: ComponentFixture<BetaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
