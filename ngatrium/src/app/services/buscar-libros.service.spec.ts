import { TestBed } from '@angular/core/testing';

import { BuscarLibrosService } from './buscar-libros.service';

describe('BuscarLibrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscarLibrosService = TestBed.get(BuscarLibrosService);
    expect(service).toBeTruthy();
  });
});
