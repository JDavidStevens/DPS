import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { mergeMap, tap, filter } from 'rxjs/operators';

export interface Video {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class DemoReelsService {
  public openVideo$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public videos: Observable<Array<Video>> =
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

  public getVideo(id: number): Video {
    let video: Video;
    this.videos.pipe(
      mergeMap((vid) => vid),
      filter((vid) => vid.id === id),
      tap((vid) => video = vid),
      tap(() => this.openVideo$.next(true))
    ).subscribe();
    return video;
  }
}
