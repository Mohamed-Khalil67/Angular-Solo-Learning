import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndividualServer } from './individual-server';

describe('IndividualServer', () => {
  let component: IndividualServer;
  let fixture: ComponentFixture<IndividualServer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualServer],
    }).compileComponents();

    fixture = TestBed.createComponent(IndividualServer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
