import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragandDropComponent } from './dragand-drop.component';

describe('DragandDropComponent', () => {
  let component: DragandDropComponent;
  let fixture: ComponentFixture<DragandDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragandDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragandDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
