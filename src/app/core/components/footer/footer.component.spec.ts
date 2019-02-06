import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('FooterComponent creation', () => {
    expect(component).toBeTruthy();
  });

  it('Footer title', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const element: HTMLElement = nativeElement.querySelector('footer');
    expect(element.textContent).toBe('All rights reserved 2019');
  });
});
