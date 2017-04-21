import { TestBed, inject } from '@angular/core/testing';

import { GaleriasService } from './galerias.service';

describe('GaleriasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GaleriasService]
    });
  });

  it('should ...', inject([GaleriasService], (service: GaleriasService) => {
    expect(service).toBeTruthy();
  }));
});
