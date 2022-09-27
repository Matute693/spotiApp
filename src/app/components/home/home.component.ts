import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  public newSongs: any[] = [];

  constructor( 
    private http: HttpClient,
    private spotify: SpotifyService  ) {

      
      this.spotify.getNewRealeses()
        .subscribe( ( data: any ) => {
          this.newSongs = data;
          console.log(this.newSongs)
      });

   }

  ngOnInit(): void {
  }

}
