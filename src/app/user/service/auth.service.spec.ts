import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let mockHttp: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide: HttpClient, useValue:mockHttp}]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
// 