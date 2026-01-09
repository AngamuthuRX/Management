import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAccordionComponent } from './grid-accordion.component';

describe('GridAccordionComponent', () => {
  let component: GridAccordionComponent;
  let fixture: ComponentFixture<GridAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
