import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public links: Array<string> = ['home', ...this.shared.links];

  constructor(private shared: SharedService) { }

  ngOnInit() { }

}
