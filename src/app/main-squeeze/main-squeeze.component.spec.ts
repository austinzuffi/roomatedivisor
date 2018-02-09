import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSqueezeComponent } from './main-squeeze.component';

describe('MainSqueezeComponent', () => {
  let component: MainSqueezeComponent;
  let fixture: ComponentFixture<MainSqueezeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSqueezeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSqueezeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
