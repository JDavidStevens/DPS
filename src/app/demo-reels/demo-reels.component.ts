import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { DemoReelsService, Video } from './demo-reels.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo-reels',
  templateUrl: './demo-reels.component.html',
  styleUrls: ['./demo-reels.component.css']
})
export class DemoReelsComponent implements OnInit {
  public demoReelOptions = this.shared.DemoReelInfo;
  public selectedVideo: Video;
  public showVideoSection: Observable<boolean>;

  constructor(private shared: SharedService, private demoReelsService: DemoReelsService) { }

  ngOnInit() {
    this.showVideoSection = this.demoReelsService.openVideo$;
  }

  public onVideoSelect(id: number): void {
    this.selectedVideo = this.demoReelsService.getVideo(id);
  }
}
