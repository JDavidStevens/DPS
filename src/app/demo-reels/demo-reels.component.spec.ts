import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoReelsComponent } from './demo-reels.component';

describe('DemoReelsComponent', () => {
  let component: DemoReelsComponent;
  let fixture: ComponentFixture<DemoReelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoReelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoReelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
