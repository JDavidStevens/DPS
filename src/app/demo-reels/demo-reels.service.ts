import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { mergeMap, map, tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemoReelsService {
  public openVideo = false;
  public videos: Observable<Array<{id: number, title: string; description: string, videoUrl: string}>> =
  of([
    {id: 1,
    title: 'Sound (re)Design Demo',
    description: 'Sound Design Demo Reel',
    videoUrl: 'https://youtu.be/Paxz_Rwo4yI'},
    {id: 2,
    title: 'Sound (re)Design Demo',
    description: 'Sound Design Demo Reel',
    videoUrl: 'https://youtu.be/Mr94a8xX76s'}
  ]);

  constructor(private sanitizer: DomSanitizer) { }

  public getVideo(id: number): Observable<object> {
    return this.videos.pipe(
      mergeMap((video) => video.map((vid) => vid)),
      filter((vid) => vid.id === id),
      tap(() => this.videoToggle(true))
    );
  }

  public videoToggle(val: boolean): void {
    this.openVideo = val;
  }
}
