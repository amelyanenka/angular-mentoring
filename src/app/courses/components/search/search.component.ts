import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public searchValue: string;

  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() changedSearchValue: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  onSearch(): void {
    this.search.emit(this.searchValue);
  }

  onChangedSearchValue(searchValue: string): void {
    this.searchValue = searchValue;
    this.changedSearchValue.emit(searchValue);
  }

  onAddCourse(): void {
    this.router.navigate(['courses', 'new']);
  }
}
