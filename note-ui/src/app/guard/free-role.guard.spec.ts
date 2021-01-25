import { TestBed } from '@angular/core/testing';

import { FreeRoleGuard } from './free-role.guard';

describe('FreeRoleGuard', () => {
  let guard: FreeRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FreeRoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
