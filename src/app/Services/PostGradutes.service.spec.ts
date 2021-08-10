/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PostGradutesService } from './PostGradutes.service';

describe('Service: PostGradutes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostGradutesService]
    });
  });

  it('should ...', inject([PostGradutesService], (service: PostGradutesService) => {
    expect(service).toBeTruthy();
  }));
});
