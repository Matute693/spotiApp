import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // requestRestCountryAPI() {
  //   console.log('Constructor del home');
  //   this.http.get(`https://restcountries.com/v2/lang/es`)
  //     .subscribe( (resp:any) => {
  //       this.countries = resp;
  //       console.log( resp );
  //     });
  // }

  getQuery( query: string) {

    const url = `https://api.spotify.com/v1/${ query }`

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCNVutuGS-r48tmLci7wSC4FoAdRGlNT0RePvevu17P6pPTuV1jWsxuj89zclKYAGc4DYagVDCxVMaxCfsIxbjKNLvoWoYW5Qer6Akn8azSw3VgiLs'
    });

    return this.http.get(url, { headers })
  }

  constructor( private http: HttpClient) { }

  getNewRealeses() {
    return  this.getQuery('browse/new-releases?limit=20')
    .pipe( map( (data: any) =>  data['albums'].items ))
  }

  getArtists( input: string) {
    return this.getQuery(`search?q=${ input }&type=artist&market=ES&limit=15`)
        .pipe(map( (data: any) =>  data['artists'].items ));
  }
}
