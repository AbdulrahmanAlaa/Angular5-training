import { Component } from '@angular/core';

@Component({
  selector: 'vf-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  list: Array<string> = [
    'Home',
    'About',
    'Contact us'
  ];
}
