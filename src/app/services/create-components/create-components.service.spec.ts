import { TestBed } from '@angular/core/testing';

import { CreateComponentsService } from './create-components.service';

describe('CreateComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateComponentsService = TestBed.get(CreateComponentsService);
    expect(service).toBeTruthy();
  });
});
