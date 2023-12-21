import { TestBed } from '@angular/core/testing';

import {ServiceBlocService} from './service-bloc.service';

describe('ServiceBlocService', () => {
  let service: ServiceBlocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBlocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
