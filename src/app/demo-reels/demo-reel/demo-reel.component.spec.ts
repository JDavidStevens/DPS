import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoReelComponent } from './demo-reel.component';

describe('DemoReelComponent', () => {
  let component: DemoReelComponent;
  let fixture: ComponentFixture<DemoReelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoReelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoReelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
