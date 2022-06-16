import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { EventsService } from '../../events.service';
import { Event } from '../../models';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  id!: string;
  event: Event | null = null;

  constructor(private route: ActivatedRoute, private readonly router: Router, private readonly service: EventsService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.service.getEvent(this.id)
        .pipe(catchError(err => {
          this.router.navigateByUrl('/events');
          return throwError(() => err);
        }))
        .subscribe(response => {
          this.event = response;
        })
   });
  }
}
