import { TestBed, inject } from '@angular/core/testing';

import { TreinosService } from './treinos.service';

describe('TreinosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreinosService]
    });
  });

  it('should ...', inject([TreinosService], (service: TreinosService) => {
    expect(service).toBeTruthy();
  }));
});
