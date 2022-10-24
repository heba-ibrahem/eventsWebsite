import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class RouteActivtorService implements CanActivate {

  constructor( private eventSer: EventsService, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const eventExists = !!this.eventSer.getEvent(+route.params['id']);
    if(!eventExists){
        this.route.navigate(['**'])
    }
    return eventExists 
  }
}
