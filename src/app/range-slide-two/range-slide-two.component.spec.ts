import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeSlideTwoComponent } from './range-slide-two.component';

describe('RangeSlideTwoComponent', () => {
  let component: RangeSlideTwoComponent;
  let fixture: ComponentFixture<RangeSlideTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RangeSlideTwoComponent]
    });
    fixture = TestBed.createComponent(RangeSlideTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
