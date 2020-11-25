import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtechComponent } from './gtech.component';

describe('GtechComponent', () => {
  let component: GtechComponent;
  let fixture: ComponentFixture<GtechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
