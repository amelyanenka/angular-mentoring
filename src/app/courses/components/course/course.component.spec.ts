import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseComponent } from './course.component';
import { Course } from '../../entities/course';
import { CourseInterface } from '../../interfaces/course.interface';
import { CoursesComponent } from '../courses/courses.component';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let coursesComponentSpy: jasmine.SpyObj<CoursesComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('CoursesComponent', ['deleteItem']);

    TestBed.configureTestingModule({
      declarations: [ CourseComponent ],
      providers: [ {provide: CoursesComponent, useValue: spy} ]
    })
    .compileComponents();

    coursesComponentSpy = TestBed.get(CoursesComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('CourseComponent creation', () => {
    expect(component).toBeTruthy();
  });

  it('Open course method calling', () => {
    const course: CourseInterface = new Course(1, 'stubTitle', 'stubCreation', 'stubDuration', 'stubDescription');
    spyOn(component, 'openItem');
    component.openItem(course);
    expect(component.openItem).toHaveBeenCalled();
  });

  it('Delete course method calling', () => {
    const course: CourseInterface = new Course(1, 'stubTitle', 'stubCreation', 'stubDuration', 'stubDescription');
    spyOn(component, 'deleteItem');
    component.deleteItem(course);
    expect(coursesComponentSpy.deleteItem).toHaveBeenCalled();
  });
});
