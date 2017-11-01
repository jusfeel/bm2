import { Component, OnInit } from '@angular/core';
import { LinksService } from '../../links.service';

@Component({
  selector: 'app-system-detail',
  templateUrl: './system-detail.component.html',
  styleUrls: ['./system-detail.component.css']
})
export class SystemDetailComponent implements OnInit {

  constructor(private linksService: LinksService) { }

  ngOnInit() {
  	this.linksService.getsome();
  }

}
