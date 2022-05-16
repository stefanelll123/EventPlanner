import { Component, TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { EventsService } from '../events.service';
import { Event } from '../models';
import { CreateComponent } from './create/create.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  events: Event[] = [];

  private createModal: NbDialogRef<CreateComponent> | null = null;

  constructor(private router: Router, private dialogService: NbDialogService, private readonly service: EventsService) {
    this.getEvents();
  }

  getEvents(): void {
    this.service.getEvents().subscribe(response => {
      this.events = response;
    })
  }

  openCreateModal(dialog: TemplateRef<CreateComponent>): void {
    this.createModal = this.dialogService.open(dialog, {closeOnBackdropClick: false});
  }

  closeModal(): void {
    if (!!this.createModal) {
      this.createModal.close();
    }
  }

  closeOnSubmit(): void {
    if (!!this.createModal) {
      this.createModal.close();
    }

    this.getEvents();
  }

  seeEventDetails(id: string): void {
    this.router.navigate(['/events', id]);
  }
}
