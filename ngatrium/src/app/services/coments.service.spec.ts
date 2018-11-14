import { TestBed } from '@angular/core/testing';

import { ComentsService } from './coments.service';

describe('ComentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComentsService = TestBed.get(ComentsService);
    expect(service).toBeTruthy();
  });
});
