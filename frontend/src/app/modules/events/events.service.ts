import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/shared/http.service';

import { Event } from './models'

@Injectable({
    providedIn: 'root',
})
export class EventsService {

    constructor(private http: HttpService) {}

    getEvents(): Observable<Event[]> {
      return this.http.getWithLoader<Event[]>(environment.eventsUri);
    }

    createEvent(event: Event): Observable<void> {
      return this.http.postWithLoader(environment.eventsUri, event);
    }
}
