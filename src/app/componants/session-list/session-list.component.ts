import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ISession } from 'src/app/shared/viewModel/i-event';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions:ISession[]=[];
  @Input() filtering: string ='';
  @Input() sorting: string ='';

  visisableSassions: ISession[]=[];

  constructor() { }
  ngOnChanges(): void {
    if(this.sessions){
      this.filterSessions(this.filtering);
      this.sorting === 'name'? this.visisableSassions.sort(this.sortByNameAs): this.visisableSassions.sort(this.sortByVotes)
    }
    
  }

  filterSessions(filter: string){
      if(filter === 'all'){
        this.visisableSassions = this.sessions.slice(0);
      } else{
        this.visisableSassions= this.sessions.filter(session =>{
          return session.level.toLocaleLowerCase()=== filter;
        })
      }
  }
  sortByNameAs(s1:ISession, s2:ISession){
    if(s1.name > s2.name){
      return 1;
    } else if (s1.name === s2.name){
      return 0
    }else{
      return -1
    }
  };
  
  sortByVotes(s1:ISession, s2:ISession){
    return s2.voters.length - s1.voters.length

  }

  ngOnInit(): void {
  }
 

}
