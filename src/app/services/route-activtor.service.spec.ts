import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EventsService } from './events.service';

import { RouteActivtorService } from './route-activtor.service';

describe('RouteActivtorService', () => {
  let service: RouteActivtorService;
  let mockEventSer: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: EventsService, useValue: mockEventSer }
      ],
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(RouteActivtorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
