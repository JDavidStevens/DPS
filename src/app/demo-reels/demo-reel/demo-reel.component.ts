import { Component, OnInit, Input } from '@angular/core';
import { Video, DemoReelsService } from '../demo-reels.service';

@Component({
  selector: 'app-demo-reel',
  templateUrl: './demo-reel.component.html',
  styleUrls: ['./demo-reel.component.css']
})
export class DemoReelComponent implements OnInit {
@Input() selectedVideo: Video;

  constructor(private demoReelsService: DemoReelsService) { }

  ngOnInit() {
  }

  onCloseVideo() {
    this.demoReelsService.openVideo$.next(false);
  }

}
