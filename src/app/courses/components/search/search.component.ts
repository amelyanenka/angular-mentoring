import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public searchValue = '';
  @Output() search = new EventEmitter();

  onSearch(): void {
    this.search.emit(this.searchValue);
  }
}
