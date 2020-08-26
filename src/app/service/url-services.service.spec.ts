import { TestBed } from '@angular/core/testing';

import { UrlServicesService } from './url-services.service';

describe('UrlServicesService', () => {
  let service: UrlServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
