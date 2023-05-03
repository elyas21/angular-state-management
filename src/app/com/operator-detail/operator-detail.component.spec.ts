import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorDetailComponent } from './operator-detail.component';

describe('OperatorDetailComponent', () => {
  let component: OperatorDetailComponent;
  let fixture: ComponentFixture<OperatorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
