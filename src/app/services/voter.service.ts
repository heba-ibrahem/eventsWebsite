import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISession } from '../shared/viewModel/i-event';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) { }
  addVoter(session: ISession, voterName: string, eventId: number) {
    let options = { headers: new HttpHeaders({ 'Content-Type': '/application/json' }) };
    let url = `/api/events/${eventId}/seissons/${session.id}/voters/${voterName}`;
    session.voters.push(voterName)

    return this.http.post(url, {}, options).pipe(
      catchError(this.handelError<ISession[]>('search session'))).subscribe()
  }
  deleteVoter(session: ISession, voterName: string, eventId: number) {
    let url = `/api/events/${eventId}/seissons/${session.id}/voters/${voterName}`;

    session.voters = session.voters.filter(voter => voter !== voterName)
    return this.http.delete(url).pipe(
      catchError(this.handelError<ISession[]>('search session'))).subscribe()
  }
  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some(voter => voter === voterName)
  }

  private handelError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T)
    }
  }
}
