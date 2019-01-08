import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesComponent } from './courses.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoursesService } from '../../services/courses.service';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let coursesServiceSpy: jasmine.SpyObj<CoursesService>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('CoursesService', ['getCourses']);

    TestBed.configureTestingModule({
      declarations: [ CoursesComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ {provide: CoursesService, useValue: spy} ]
    })
    .compileComponents();

    coursesServiceSpy = TestBed.get(CoursesService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('CoursesComponent creation', () => {
    expect(component).toBeTruthy();
  });

  it('Get all courses method calling', () => {
    component.ngOnInit();
    expect(coursesServiceSpy.getCourses).toHaveBeenCalled();
  });

  it('Show more method calling', () => {
    spyOn(component, 'showMore');
    component.showMore();
    expect(component.showMore).toHaveBeenCalled();
  });
});
