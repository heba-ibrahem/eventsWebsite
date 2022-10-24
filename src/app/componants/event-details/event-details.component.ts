import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { IEvent, ISession } from 'src/app/shared/viewModel/i-event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
    event!:IEvent|any;
    addMode= false ;
    filterBy = 'all';
    sortBy = 'name'

  constructor(private eventSer: EventsService, private route:ActivatedRoute) {
    // this.event = this.eventSer.getEvent(+this.route.snapshot.params['id'])

   }

  ngOnInit(): void {
    this.route.params.forEach((param:Params)=>{
      this.event = this.eventSer.getEvent(+param['id']);
      this.addMode =false
    })
    // this.event = this.eventSer.getEvent(+this.route.snapshot.params['id'])
  }
  addSession(){
    this.addMode =true
  }
  SaveNewSession(session:ISession){
    const nextId = Math.max.apply(null,this.event.sessions.map((s: { id: any; })=>s.id))
    session.id=nextId;
    this.event.sessions.push(session);
    this.eventSer.updateEvent(this.event)
    this.addMode= false

  }
  cancelNewSession(){
    this.addMode = false
  }

}
