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
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should have a default heading', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const text: HTMLElement = nativeElement.querySelector('p');
    expect(text.textContent).toBe('You\'re signed in as John Doe');
  });
});
