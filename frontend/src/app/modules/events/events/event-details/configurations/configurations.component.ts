import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { EventsService } from '../../../events.service';
import { Event, parseEventToJson } from '../../../models';

@Component({
  selector: 'app-event-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss']
})
export class ConfigurationsComponent implements OnChanges {

  @Input() event: Event | null = null;

  updateEventForm!: FormGroup;

  constructor(private readonly service: EventsService, private datePipe: DatePipe) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['event'] && !!this.event) {
      console.log(this.event.registerEndDate);
      console.log(this.datePipe.transform(this.event.startDate, 'dd-MM-yyyy'));
      this.updateEventForm = new FormGroup({
        name: new FormControl(this.event.name, {
          validators: [Validators.required, Validators.minLength(8), Validators.maxLength(100)],
          updateOn: 'blur'
        }),
        edition: new FormControl(this.event.edition, {
          validators: [Validators.required],
          updateOn: 'blur'
        }),
        startDate: new FormControl(moment(this.event.startDate), {
          validators: [Validators.required],
          updateOn: 'blur'
        }),
        endDate: new FormControl(moment(this.event.endDate), {
          validators: [],
          updateOn: 'blur'
        }),
        registerStartDate: new FormControl(moment(this.event.registerStartDate), {
          validators: [Validators.required],
          updateOn: 'blur'
        }),
        registerEndDate: new FormControl(moment(this.event.registerEndDate), {
          validators: [],
          updateOn: 'blur'
        }),
        maximumNumberOfParticipans: new FormControl(this.event.maximumNumberOfParticipans, {
          validators: [],
          updateOn: 'blur'
        })
      });
    }
  }

  onSubmit(): void {
    console.log(parseEventToJson(this.updateEventForm.value))
  }
}
