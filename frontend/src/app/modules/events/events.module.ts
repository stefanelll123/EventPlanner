import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';
import { CreateComponent } from './events/create/create.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventComponent } from './events/event/event.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    EventsComponent,
    EventComponent,
    CreateComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EventsModule { }
