import { Component } from '@angular/core';
import { LinksService } from './links.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LinksService]
})
export class AppComponent {
  title = 'UBookmark';
}
