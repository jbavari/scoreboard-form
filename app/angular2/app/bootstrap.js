import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {ScoreboardApp} from './components/app/app';

export function main() {

  bootstrap(ScoreboardApp, [
    provide(APP_BASE_HREF, { useValue: '<%= APP_ROOT %>' } ),
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
