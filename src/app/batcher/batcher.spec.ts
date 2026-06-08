import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Batcher } from './batcher';

describe('Batcher', () => {
  let component: Batcher;
  let fixture: ComponentFixture<Batcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Batcher],
    }).compileComponents();

    fixture = TestBed.createComponent(Batcher);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
