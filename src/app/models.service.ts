import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlbumModel } from './album.model';



@Injectable()
export class AlbumsService {
  private albumsUrl: string = 'https://jsonplaceholder.typicode.com/albums'
  constructor(
    private http: HttpClient
  ) { }

  getAlbums(): Observable<AlbumModel[]>{
    return this.http.get<AlbumModel[]>(this.albumsUrl)
  }

}