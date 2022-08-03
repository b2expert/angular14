import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { TitleResolver } from './core/services/title.resolver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _titleResolver: TitleResolver
  ) {
    this._router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(r => this._titleResolver.getPageTitleFromActiveRoute(this._activatedRoute))
    ).subscribe(pageTitle => {
      _titleResolver.updateTitle(pageTitle);
    });
  }
}
