import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { ISession } from 'src/app/shared/viewModel/i-event';
import { AuthService } from 'src/app/user/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchTerm = '';
  foundSession: ISession[] = [];

  constructor(public auth: AuthService, private eventSer: EventsService) { }

  ngOnInit(): void {
  }
  search(searchTerm: string) {
    this.eventSer.searchSevice(searchTerm).subscribe((sessions: ISession[]) => {
      this.foundSession = sessions;
      // console.log(this.foundSession)
    });
  };
};
