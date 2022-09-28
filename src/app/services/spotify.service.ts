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
      'Authorization': 'Bearer BQCPchKSa8U2P2WxVAAnw5hADEB9lvSo8k2zJjjRJj44wcN82eYbqYMLc4NJ4F_WSdjC6M8bFttmbVsSJ0pgVQectFGg4V_m3rHYQJrOFMVoy1Au2Nw'
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
