import { Injectable } from '@angular/core';

@Injectable()
export class SystemService {

  constructor() { }

  getMessage() : string{
  	return "Welcome to Hong Kong";// not implemented yet
  }

}
