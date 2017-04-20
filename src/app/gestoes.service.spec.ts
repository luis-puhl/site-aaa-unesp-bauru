import { TestBed, inject } from '@angular/core/testing';

import { GestoesService } from './gestoes.service';

describe('GestoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestoesService]
    });
  });

  it('should ...', inject([GestoesService], (service: GestoesService) => {
    expect(service).toBeTruthy();
  }));
});
