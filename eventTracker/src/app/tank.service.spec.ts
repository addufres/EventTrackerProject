import { TestBed, inject } from '@angular/core/testing';

import { TankService } from './tank.service';

describe('TankService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TankService]
    });
  });

  it('should be created', inject([TankService], (service: TankService) => {
    expect(service).toBeTruthy();
  }));
});
