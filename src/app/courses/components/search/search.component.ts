import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchValue: string;
  private searchSubject = new Subject<string>();

  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() changedSearchValue: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {}

  public ngOnInit() {
    this.searchSubject
      .pipe(
        filter(() => this.searchValue.length >= 3 || this.searchValue.length === 0),
        debounceTime(1000)
      )
      .subscribe(() => this.search.emit(this.searchValue));
  }

  public onSearch(): void {
    this.searchSubject.next(this.searchValue);
  }

  public onChangedSearchValue(searchValue: string): void {
    this.searchValue = searchValue;
    this.changedSearchValue.emit(searchValue);
  }

  public onAddCourse(): void {
    this.router.navigate(['courses', 'new']);
  }
}
