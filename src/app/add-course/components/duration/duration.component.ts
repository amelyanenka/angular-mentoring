import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent {
  public duration: number;

  @Output() changedDuration: EventEmitter<number> = new EventEmitter<numner>();

  onChangedDuration(duration: number): void {
    this.duration = duration;
    this.changedDuration.emit(duration);
  }
}
