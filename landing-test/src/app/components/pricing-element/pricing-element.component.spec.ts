import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingElementComponent } from './pricing-element.component';

describe('PricingElementComponent', () => {
  let component: PricingElementComponent;
  let fixture: ComponentFixture<PricingElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
