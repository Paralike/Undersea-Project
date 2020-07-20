import { TestBed } from '@angular/core/testing';

import { AuthpageService } from './authpage.service';

describe('AuthpageService', () => {
  let service: AuthpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
