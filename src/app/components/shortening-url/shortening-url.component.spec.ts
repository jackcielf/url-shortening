import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorteningUrlComponent } from './shortening-url.component';

describe('ShorteningUrlComponent', () => {
  let component: ShorteningUrlComponent;
  let fixture: ComponentFixture<ShorteningUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShorteningUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShorteningUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
