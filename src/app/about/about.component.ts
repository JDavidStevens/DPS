import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public aboutTitle = 'WHO AM I?';
  public explanation =
  'Dan Patrick Stevens Productions is a full service audio company that creates music and sounds that help enhance visual media.';

  constructor() { }

  ngOnInit() {
  }

}
