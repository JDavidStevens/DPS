import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name = 'DAN PATRICK STEVENS';
  public slogan = this.shared.slogan;
  public links = this.shared.links;

  constructor(private shared: SharedService) { }

  ngOnInit() { }

}
