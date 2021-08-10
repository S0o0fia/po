/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QulificationsService } from './Qulifications.service';

describe('Service: Qulifications', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QulificationsService]
    });
  });

  it('should ...', inject([QulificationsService], (service: QulificationsService) => {
    expect(service).toBeTruthy();
  }));
});
