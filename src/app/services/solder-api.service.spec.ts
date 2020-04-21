import { TestBed } from '@angular/core/testing';

import { SolderApiService } from './solder-api.service';

describe('SolderApiService', () => {
  let service: SolderApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolderApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
