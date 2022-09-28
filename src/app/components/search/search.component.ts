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
  public loading: boolean = false;

  constructor( private spotifyService: SpotifyService) {
   }

  ngOnInit(): void {
  }

  searchArtist(input: string) {
    this.loading = true;
    this.spotifyService.getArtists(input)
    .subscribe( ( resp: any ) => {
      this.artists = resp;
      this.loading = false;
    })
  }
}
