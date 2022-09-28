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
  public loading: boolean = true;
  public error: boolean = false;
  public messageError: string = '';
  public messageStatus: string = '';

  constructor( 
    private http: HttpClient,
    private spotify: SpotifyService  ) {
      
      this.spotify.getNewRealeses()
        .subscribe( ( data: any ) => {
          this.newSongs = data;
          this.loading = false;
      }, ( err ) => {
        this.error = true;
        this.loading = false;
        this.messageError = err.error.error.message;
        this.messageStatus = err.error.error.status
      });

   }

  ngOnInit(): void {
  }

}
