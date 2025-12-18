import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo.interface';

@Injectable({
  providedIn: 'root',
})
export class Photos {
  private api = 'https://picsum.photos/v2/list';
  constructor(private http: HttpClient) {}
  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.api);
  }

  getPhotoById(id: string): Observable<Photo> {
    return this.http.get<Photo>('https://picsum.photos/id/' + id + '/info');
  }
}
