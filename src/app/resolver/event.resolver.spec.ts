import { TestBed } from '@angular/core/testing';
import { EventsService } from '../services/events.service';

import { EventResolver } from './event.resolver';

describe('EventResolver', () => {
  let resolver: EventResolver;
  let mockEventSer: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: EventsService, useValue: mockEventSer }]
    });
    resolver = TestBed.inject(EventResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
