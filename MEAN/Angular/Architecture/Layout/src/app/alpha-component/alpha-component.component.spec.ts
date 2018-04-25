import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaComponentComponent } from './alpha-component.component';

describe('AlphaComponentComponent', () => {
  let component: AlphaComponentComponent;
  let fixture: ComponentFixture<AlphaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
