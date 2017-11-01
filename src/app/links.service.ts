import { Injectable } from '@angular/core';

@Injectable()
export class LinksService {

  constructor() { 
  	console.log("links service contructed");
  }

  getsome() : void {
  	console.log("links service get()");
  }

}
