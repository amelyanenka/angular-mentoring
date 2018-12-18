import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // fixture.detectChanges();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
    const nativeElement: HTMLElement = fixture.nativeElement;
    const h1: HTMLElement = nativeElement.querySelector('p');
    expect(h1.textContent).toBe('You\'re signed in as John Doe');
  });
});
