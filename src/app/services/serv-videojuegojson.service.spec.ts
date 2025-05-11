import { TestBed } from '@angular/core/testing';

import { ServVideojuegojsonService } from './serv-videojuegojson.service';

describe('ServVideojuegojsonService', () => {
  let service: ServVideojuegojsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServVideojuegojsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
