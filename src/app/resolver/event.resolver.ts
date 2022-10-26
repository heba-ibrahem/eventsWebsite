import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EventsService } from '../services/events.service';

@Injectable({
  providedIn: 'root'
})
export class EventResolver implements Resolve<boolean> {
  constructor(private eventSer: EventsService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.eventSer.getEvent(route.params['id']);
  }
}
