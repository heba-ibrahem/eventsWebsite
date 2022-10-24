import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componants/navbar/navbar.component';
import { EventListComponent } from './componants/event-list/event-list.component';
import { EventCardComponent } from './componants/event-card/event-card.component';
import { HomeComponent } from './componants/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventDetailsComponent } from './componants/event-details/event-details.component';
import { NewEventComponent } from './componants/new-event/new-event.component';
import { NotFoundComponent } from './shared/componants/not-found/not-found.component';
import { CreateSessionComponent } from './componants/create-session/create-session.component';
import { SessionListComponent } from './componants/session-list/session-list.component';
import { CollapsiableWellComponent } from './shared/componants/collapsiable-well/collapsiable-well.component';
import { DurationPipe } from './shared/pipes/duration.pipe';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule ,  ToastNoAnimation, ToastNoAnimationModule} from 'ngx-toastr';
import { ModalComponent } from './shared/componants/modal/modal.component';
import { ModalTriggerDirective } from './shared/directive/modal-trigger.directive';
import { JQ_TOKEN} from './services/jquery.service'


let jQuery = window['$' as unknown as number] ;


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventListComponent,
    EventCardComponent,
    HomeComponent,
    EventDetailsComponent,
    NewEventComponent,
    NotFoundComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsiableWellComponent,
    DurationPipe,
    ModalComponent,
    ModalTriggerDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    ToastNoAnimationModule.forRoot(),

  ],
  providers: [
    {provide: JQ_TOKEN , useValue:jQuery}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
