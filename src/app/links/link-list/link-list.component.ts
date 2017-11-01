import { Component, OnInit } from '@angular/core';
import { LinksService } from '../../links.service';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css'],
  providers: [LinksService]
})
export class LinkListComponent implements OnInit {

  constructor( private linksService: LinksService ) { }

  ngOnInit() {
  	this.linksService.getsome();
  }

}
