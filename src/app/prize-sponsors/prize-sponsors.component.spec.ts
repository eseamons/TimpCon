import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeSponsorsComponent } from './prize-sponsors.component';

describe('PrizeSponsorsComponent', () => {
  let component: PrizeSponsorsComponent;
  let fixture: ComponentFixture<PrizeSponsorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrizeSponsorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
