import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCss } from './dynamic-css';

describe('DynamicCss', () => {
  let component: DynamicCss;
  let fixture: ComponentFixture<DynamicCss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicCss],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicCss);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
