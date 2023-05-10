import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movies } from './movie';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://638492184ce192ac605bc39a.mockapi.io/Movie';

  

  constructor(private http: HttpClient) { }

  getMovie(id: number): Observable<movies[]> {
    console.log('id = ', id)
    return this.http.get<movies[]>('https://638492184ce192ac605bc39a.mockapi.io/Movie/' + id  );
  }


}