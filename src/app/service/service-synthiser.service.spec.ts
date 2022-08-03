import { TestBed } from '@angular/core/testing';

import { ServiceSynthiserService } from './service-synthiser.service';

describe('ServiceSynthiserService', () => {
  let service: ServiceSynthiserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSynthiserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
