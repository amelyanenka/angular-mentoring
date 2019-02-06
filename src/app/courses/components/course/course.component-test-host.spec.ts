import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CourseInterface } from '../../../shared/interfaces/course.interface';
import { CourseComponent } from './course.component';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  template: `
    <app-course
      [course]='course' (delete)='deleteItem($event)'>
    </app-course>`
})

class TestHostComponent {
  public course: CourseInterface = {
    id: 1,
    title: 'title',
    creation: 1549451108750,
    duration: 65,
    description: 'description',
    topRated: false
  };
  public deletedCourse: CourseInterface;
  public deleteItem(deletedCourse: CourseInterface) { this.deletedCourse = deletedCourse; }
}

describe('CourseComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let coursesComponent: Partial<CoursesComponent>;

  beforeEach(async(() => {
    coursesComponent = {
      onDelete: jasmine.createSpy('deleteItem')
    };

    TestBed.configureTestingModule({
      declarations: [ CourseComponent, TestHostComponent ],
      providers: [{ useValue: coursesComponent, provide: CoursesComponent }]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
  });

  it('should raise deleted course', () => {
    fixture.detectChanges();

    const expectedDeletedCourse = {
      id: 1,
      title: 'stubTitle',
      creation: 'stubCreation',
      duration: 'stubDuration',
      description: 'stubDescription'
    };

    const deleteButton = fixture.debugElement.query(By.css('.delete'));
    deleteButton.triggerEventHandler('click', null);

    expect(testHost.course).toEqual(expectedDeletedCourse);
  });
});
