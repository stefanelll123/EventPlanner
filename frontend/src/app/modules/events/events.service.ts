import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/shared/http.service';

import { Event, validateEvent } from './models'
import { expectArray } from 'src/app/shared/validation';

const validateEventArray = (value: unknown) => expectArray(value).map(validateEvent);

@Injectable({
    providedIn: 'root',
})
export class EventsService {

    constructor(private http: HttpService) {}

    getEvents(): Observable<Event[]> {
      return this.http.getWithLoader<Event[]>(environment.eventsUri)
      .pipe(map(validateEventArray));;
    }

    getEvent(id: string): Observable<Event> {
      return this.http.getWithLoader<Event>(`${environment.eventsUri}/${id}`)
        .pipe(map(validateEvent));
    }

    createEvent(event: Event): Observable<void> {
      return this.http.postWithLoader(environment.eventsUri, event);
    }
}
