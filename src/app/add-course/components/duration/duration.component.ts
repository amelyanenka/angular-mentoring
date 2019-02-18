import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent {
  @Input() exist: boolean;
  @Input() duration: number;
  @Output() changedDuration: EventEmitter<number> = new EventEmitter<number>();

  onChangedDuration(duration: number): void {
    this.duration = duration;
    this.changedDuration.emit(duration);
  }
}
