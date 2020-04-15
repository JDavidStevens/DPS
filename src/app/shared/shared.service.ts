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

  public DemoReelInfo: {id: number, title: string, source: string}[] = [
    {id: 1, title: 'SOUND DESIGN', source: 'assets/images/demo-reel/sound_design.jpg'},
    {id: 2, title: 'MUSIC', source: 'assets/images/demo-reel/music.jpg'},
    {id: 3, title: 'EXTRAS', source: 'assets/images/demo-reel/extras.jpg'}
  ];

  public media: {title: string, source: string, link: string}[] = [
    {title: 'instagram', source: 'assets/images/media/footer/instagram_logo.png',
    link: 'https://www.instagram.com/danpatrickstevensmusic/'},
    {title: 'youtube', source: 'assets/images/media/footer/youtube_logo.png',
    link: 'https://www.youtube.com/channel/UCnXEKDndIyokYnt45SjeemA/videos?view_as=public'},
    {title: '', source: 'assets/images/media/footer/spotify_logo.jpg',
    link: 'https://open.spotify.com/album/1VO4UzHlHNL4lRZxmOHyQI'},
    {title: '', source: 'assets/images/media/footer/itunes_logo.jpg',
    link: 'http://itunes.apple.com/album/id/1443870647'},
  ];

}
