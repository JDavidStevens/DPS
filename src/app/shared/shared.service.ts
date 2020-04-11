import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public slogan = 'MUSIC TO YOUR EARS AND EYES';
  public links: Array<string> = [
    'demoreels', 'music2', 'about2', 'contact'
  ];
  public MusicInfo: {title: string, source: string}[] = [
    {title: 'ACTION & ADVENTURE', source: 'assets/images/music/action.jpg'},
    {title: 'HORROR', source: 'assets/images/music/horror.jpg'},
    {title: 'SCI-FI & FANTASY', source: 'assets/images/music/scifi.jpg'},
    {title: 'WESTERN', source: 'assets/images/music/western.jpg'},
    {title: 'WHIMSICAL & HAPPY', source: 'assets/images/music/happy.jpg'},
    {title: 'WORLD', source: 'assets/images/music/world.jpg'}
  ];

  public DemoReelInfo: {title: string, source: string}[] = [
    {title: 'SOUND DESIGN', source: 'assets/images/demo-reel/sound_design.jpg'},
    {title: 'MUSIC', source: 'assets/images/demo-reel/music.jpg'},
    {title: 'EXTRAS', source: 'assets/images/demo-reel/extras.jpg'}
  ];

  public media: {title: string, source: string, link: string}[] = [
    {title: '', source: 'assets/images/media/', link: ''},
  ];

}
