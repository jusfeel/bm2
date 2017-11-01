import { TestBed, inject } from '@angular/core/testing';

import { SystemFakeService } from './system-fake.service';

describe('SystemFakeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemFakeService]
    });
  });

  it('should be created', inject([SystemFakeService], (service: SystemFakeService) => {
    expect(service).toBeTruthy();
  }));
});
