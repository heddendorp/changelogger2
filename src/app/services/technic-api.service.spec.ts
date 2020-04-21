import { TestBed } from '@angular/core/testing';

import { TechnicApiService } from './technic-api.service';

describe('TechnicApiService', () => {
  let service: TechnicApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
