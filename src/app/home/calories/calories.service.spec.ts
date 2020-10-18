import { TestBed } from '@angular/core/testing';

import { CaloriesService } from './calories.service';

describe('CaloriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaloriesService = TestBed.get(CaloriesService);
    expect(service).toBeTruthy();
  });
});
