import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveLeadsComponent } from './inactive-leads.component';

describe('InactiveLeadsComponent', () => {
  let component: InactiveLeadsComponent;
  let fixture: ComponentFixture<InactiveLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactiveLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
