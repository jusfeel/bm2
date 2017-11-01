import { Injectable } from '@angular/core';

@Injectable()
export class SystemFakeService {

  constructor() { }

  getMessage() {
  	return "Welcome to Hong Kong";
  }

}
