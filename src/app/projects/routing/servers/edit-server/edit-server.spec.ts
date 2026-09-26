import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditServer } from './edit-server';

describe('EditServer', () => {
  let component: EditServer;
  let fixture: ComponentFixture<EditServer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditServer],
    }).compileComponents();

    fixture = TestBed.createComponent(EditServer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
