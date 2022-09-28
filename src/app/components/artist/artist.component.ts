import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [`
  .container__image {
    display: flex;
    justify-content: center;
  }
  
  `
  ]
})
export class ArtistComponent {

  public artist: any = {};
  public topTracks: any[] = [];
  public loading: boolean = false;
  public image: string = '';
  public populationColor: boolean = false;



  constructor( 
      private router: ActivatedRoute, 
      private spotifyService: SpotifyService,
      private location: Location) {
      this.loading = true
      router.params.subscribe( params => {
      this.getArtist(params['id'])
      this.getTopSongs(params['id'])
      this.colorPopulation(params['population']);
    });
   }

   getArtist( id: string) {
     this.loading = true;
     this.spotifyService.getArtist(id)
     .subscribe( ( artist: any ) => {
      this.loading = false
       this.artist = artist;
      });
   }

   goBack() {
     this.location.back();
   }

   colorPopulation( population: number) {
     if (population < 50) {
      return this.populationColor = false;
    } else {
      return this.populationColor = true;
       
     }
   }

   getTopSongs( id: string){
    this.spotifyService.getTopSongs( id )
      .subscribe( (topTracks: any) => {
        this.topTracks = topTracks;
        console.log(topTracks)
      })
 }
}
