import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventsService } from '../../events.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  @Output() closeModal = new EventEmitter()
  @Output() closeOnSubmit = new EventEmitter()

  loginForm: FormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(100)],
      updateOn: 'blur'
    }),
    edition: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur'
    }),
    startDate: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur'
    }),
    endDate: new FormControl('', {
      validators: [],
      updateOn: 'blur'
    }),
    registerStartDate: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur'
    }),
    registerEndDate: new FormControl('', {
      validators: [],
      updateOn: 'blur'
    }),
    maximumNumberOfParticipans: new FormControl('', {
      validators: [],
      updateOn: 'blur'
    })
  });

  constructor(private readonly service: EventsService, private datePipe: DatePipe) {}

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    let body = this.loginForm.value;
    body.startDate = this.datePipe.transform(body.startDate, 'dd-MM-yyyy');
    body.endDate = this.datePipe?.transform(body.endDate, 'dd-MM-yyyy');
    body.registerStartDate = this.datePipe.transform(body.registerStartDate, 'dd-MM-yyyy');
    body.registerEndDate = this.datePipe?.transform(body.registerEndDate, 'dd-MM-yyyy');

    this.service.createEvent(this.loginForm.value)
      .subscribe(_ => this.closeOnSubmit.emit());
  }
}
