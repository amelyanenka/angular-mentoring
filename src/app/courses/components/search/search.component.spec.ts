import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchComponentSpy: jasmine.SpyObj<SearchComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('SearchComponent', ['search']);

    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ SearchComponent ],
      providers: [ {provide: SearchComponent, useValue: spy} ]
    })
    .compileComponents();

    searchComponentSpy = TestBed.get(SearchComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('SearchComponent creation', () => {
    expect(component).toBeTruthy();
  });

  it('Search method calling', () => {
    spyOn(component, 'search');
    component.search();
    expect(component.search).toHaveBeenCalled();
  });
});
