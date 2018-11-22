import { Store } from '../../store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Song {
  id: number;
  artist: string;
  track: string;
  listened: boolean;
  favourite: boolean;
}

@Injectable()
export class SongsService {

  getPlaylist$: Observable<Song[]> = this.http
    .get<Song[]>('/api/playlist')
    .pipe(
      tap(next => this.store.set('playlist', next))
    );

  constructor(
    private http: HttpClient,
    private store: Store
  ) {

  }

  toggle(event: any) {
    this.http
      .put(`/api/playlist/${event.track.id}`, event.track)
      .subscribe((track: Song) => {
        const value = this.store.value.playlist;

        const playlist = value.map((song: Song) => {
          if (event.track.id === song.id) {
            return { ...song, ...event.track };
          } else {
            return song;
          }
        });

        this.store.set('playlist', playlist);
      });
  }
}
