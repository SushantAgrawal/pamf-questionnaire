import { TestBed, inject } from '@angular/core/testing';

import { PamfService } from './pamf.service';

describe('PamfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PamfService]
    });
  });

  it('should be created', inject([PamfService], (service: PamfService) => {
    expect(service).toBeTruthy();
  }));
});
