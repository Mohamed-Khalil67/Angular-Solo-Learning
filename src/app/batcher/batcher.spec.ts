import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { Batcher } from './batcher';

describe('Batcher', () => {
  let component: Batcher;
  let fixture: ComponentFixture<Batcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Batcher],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Batcher);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
