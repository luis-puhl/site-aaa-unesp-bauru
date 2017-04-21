import { TestBed, inject } from '@angular/core/testing';

import { TorcidasService } from './torcidas.service';

describe('TorcidasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TorcidasService]
    });
  });

  it('should ...', inject([TorcidasService], (service: TorcidasService) => {
    expect(service).toBeTruthy();
  }));
});
