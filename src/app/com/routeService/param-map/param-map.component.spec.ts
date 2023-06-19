import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamMapComponent } from './param-map.component';

describe('ParamMapComponent', () => {
  let component: ParamMapComponent;
  let fixture: ComponentFixture<ParamMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParamMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
