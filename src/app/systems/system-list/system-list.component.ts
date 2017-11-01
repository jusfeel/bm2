import { Component, OnInit } from '@angular/core';
import { LinksService } from '../../links.service';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-system-list',
  templateUrl: './system-list.component.html',
  styleUrls: ['./system-list.component.css']
})
export class SystemListComponent implements OnInit {

  message: string;

  constructor(private linksService: LinksService, private systemService: SystemService) { }

  ngOnInit() {
  	this.linksService.getsome();

  	this.message = this.systemService.getMessage();
  }

}
