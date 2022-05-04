import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotoSelectComponent } from './goto-select.component';

describe('GotoSelectComponent', () => {
  let component: GotoSelectComponent;
  let fixture: ComponentFixture<GotoSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GotoSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GotoSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
