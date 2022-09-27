import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  public artists: any[] =[];

  constructor( private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  searchArtist(input: string) {
    this.spotifyService.getArtists(input)
    .subscribe( ( resp: any ) => {
      this.artists = resp;
      console.log( this.artists );
    })
  }

}
