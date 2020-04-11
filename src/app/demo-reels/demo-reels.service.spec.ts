import { TestBed } from '@angular/core/testing';

import { DemoReelsService } from './demo-reels.service';

describe('DemoReelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoReelsService = TestBed.get(DemoReelsService);
    expect(service).toBeTruthy();
  });
});
