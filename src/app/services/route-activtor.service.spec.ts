import { TestBed } from '@angular/core/testing';

import { RouteActivtorService } from './route-activtor.service';

describe('RouteActivtorService', () => {
  let service: RouteActivtorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteActivtorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
