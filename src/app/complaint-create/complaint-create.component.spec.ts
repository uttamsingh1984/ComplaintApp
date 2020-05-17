import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintCreateComponent } from './complaint-create.component';

describe('ComplaintCreateComponent', () => {
  let component: ComplaintCreateComponent;
  let fixture: ComponentFixture<ComplaintCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
