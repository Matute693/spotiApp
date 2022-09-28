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
  public loading: boolean = false;

  constructor( 
    private http: HttpClient,
    private spotify: SpotifyService  ) {

      this.loading = false;
      
      this.spotify.getNewRealeses()
        .subscribe( ( data: any ) => {
          this.newSongs = data;
          this.loading = true;
      });

   }

  ngOnInit(): void {
  }

}
