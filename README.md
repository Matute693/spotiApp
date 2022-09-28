# SpotiApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

In this project I consume the Spotify API and different endpoints to obtain information through observables.

## Information about Spotify API

https://developer.spotify.com/dashboard/

1) You must generate an application in Spotify Generate an `access token`, token access expires every hour.


2) then paste that access token into the request headers inside the spotify.service.ts file

3) `client_secret` and `client_id` are generated with a new application in the dashboard section.

4) Generate token access through this endpoint.

ENDPOINT:  
https://accounts.spotify.com/api/token

-B
- grant_type: client_credentials
- client_id: {{ client_id }}
- client_secret: {{ client_secret }}


endpoint NEW RELEASES

https://api.spotify.com/v1/browse/new-releases

-H
- Authorization: Bearer {{ accessToken - endpoint }}
- Accept: application/json
- Content-Type: application/json


