import { Component, Input} from '@angular/core';
import { Event } from '../../models';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  @Input() event!: Event;

  getBackground() {
    return 'background-color: #36f;'
  }

}
