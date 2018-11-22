import { SongsService } from './../../services/songs.service';
import { Store } from '../../../store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'songs-favourites',
  template: `
    <div class="songs">
      <songs-list
        [list]="favourites$ | async"
        (toggle)="onToggle($event)">
        Favourites
      </songs-list>
    </div>
  `
})
export class SongsFavouritesComponent implements OnInit {

  favourites$: Observable<any[]>;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {}

  ngOnInit() {
    this.favourites$ = this.store.select('playlist').pipe(
      filter(Boolean),
      map(playlist => playlist.filter(track => track.favourite))
    );
  }

  onToggle(event) {
    this.songsService.toggle(event);
  }
}
