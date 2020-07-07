import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentsComponent } from './developments.component';

describe('DevelopmentsComponent', () => {
  let component: DevelopmentsComponent;
  let fixture: ComponentFixture<DevelopmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
