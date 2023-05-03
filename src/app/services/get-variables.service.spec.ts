import { TestBed } from '@angular/core/testing';

import { GetVariablesService } from './get-variables.service';

describe('GetVariablesService', () => {
  let service: GetVariablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetVariablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
