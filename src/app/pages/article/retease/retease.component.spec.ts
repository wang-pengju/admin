import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReteaseComponent } from './retease.component';

describe('ReteaseComponent', () => {
  let component: ReteaseComponent;
  let fixture: ComponentFixture<ReteaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReteaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReteaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
