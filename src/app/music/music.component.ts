import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  public musicOptions = this.shared.MusicInfo;

  constructor(private shared: SharedService) { }

  public ngOnInit(): void { }

}
