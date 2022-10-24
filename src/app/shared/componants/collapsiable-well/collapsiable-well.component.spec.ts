import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsiableWellComponent } from './collapsiable-well.component';

describe('CollapsiableWellComponent', () => {
  let component: CollapsiableWellComponent;
  let fixture: ComponentFixture<CollapsiableWellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapsiableWellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsiableWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
