import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { DemoReelsService, Video } from './demo-reels.service';

@Component({
  selector: 'app-demo-reels',
  templateUrl: './demo-reels.component.html',
  styleUrls: ['./demo-reels.component.css']
})
export class DemoReelsComponent implements OnInit {
  public demoReelOptions = this.shared.DemoReelInfo;
  public selectedVideo: Video;

  constructor(private shared: SharedService, private demoReelsService: DemoReelsService) { }

  ngOnInit() {
  }

  public onVideoSelect(id: number) {
    this.demoReelsService.getVideo(id);
  }
}
