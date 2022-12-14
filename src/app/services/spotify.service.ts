import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  getQuery( query: string) {

    const url = `https://api.spotify.com/v1/${ query }`

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDVlwWN12S-tWX1P07d6HLbFwKdcKtNUCzMZ-Q3ZQFKXcpgobHSoMICiYSYGM5nKZoZKGgU66zbNEnjfF8qrXEGfarfd0oir_OU8RiUrSW-oI8e8lo'
    });

    return this.http.get(url, { headers })
  }

  constructor( private http: HttpClient) { }

  getNewRealeses() {
    return  this.getQuery('browse/new-releases?limit=20')
    .pipe( map( (data: any) =>  data['albums'].items ))
  }

  getArtists( input: string) {
    return this.getQuery(`search?q=${ input }&type=artist&market=us&limit=15`)
        .pipe(map( (data: any) =>  data['artists'].items ));
  }

  getArtist( id: string ) {
    return this.getQuery(`artists/${ id }`)
  }

  getTopSongs( id: string ) {
    return this.getQuery(`artists/${id}/top-tracks?market=us`)
      .pipe( map( ( data: any) => data['tracks']))
  }
}
