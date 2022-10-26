import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSessionComponent } from './componants/create-session/create-session.component';
import { EventDetailsComponent } from './componants/event-details/event-details.component';
import { EventListComponent } from './componants/event-list/event-list.component';
import { NewEventComponent } from './componants/new-event/new-event.component';
import { EventResolver } from './resolver/event.resolver';
import { RouteActivtorService } from './services/route-activtor.service';
import { NotFoundComponent } from './shared/componants/not-found/not-found.component';

const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'event/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
  { path: 'newEvent', component: NewEventComponent },
  { path: 'createSeesion', component: CreateSessionComponent },
  { path: '', pathMatch: 'full', redirectTo: '/events' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
