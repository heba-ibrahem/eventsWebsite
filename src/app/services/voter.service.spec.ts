import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { ISession } from '../shared/viewModel/i-event';

import { VoterService } from './voter.service';

describe('VoterService', () => {
  let service: VoterService;
  let mockHttp: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: mockHttp }]
    });
    service = TestBed.inject(VoterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

// isolated unit test
describe('VoterService', () => {
  let voterService: VoterService;
  let mockHttp: any;
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post'])
    voterService = new VoterService(mockHttp)
  });
  describe('delete voter', () => {
    it('should remove the voter from list of voter', () => {
      var session = { id: 6, voters: ["john", "joe"] };
      mockHttp.delete.and.returnValue(of(false))
      voterService.deleteVoter(<ISession>session, "joe", 3);
      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('john');
    })
    it('should call http.delete with right url', () => {
      var session = { id: 6, voters: ["john", "joe"] };
      mockHttp.delete.and.returnValue(of(false))
      voterService.deleteVoter(<ISession>session, "joe", 3);
      expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/seissons/6/voters/joe')
    })
  })
  describe('add voter', () => {

    it('should call http.post with right url', () => {
      var session = { id: 6, voters: ["john", "joe"] };
      mockHttp.post.and.returnValue(of(false))
      voterService.addVoter(<ISession>session, "joe", 3);
      expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/seissons/6/voters/joe', {}, jasmine.any(Object))
    })
  })

})
