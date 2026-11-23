import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibroTable } from './libro-table';

describe('LibroTable', () => {
  let component: LibroTable;
  let fixture: ComponentFixture<LibroTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroTable],
    }).compileComponents();

    fixture = TestBed.createComponent(LibroTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
