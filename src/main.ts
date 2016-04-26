import {enableProdMode}  from 'angular2/core';
import {bootstrap}       from 'angular2/platform/browser'
import {JSONP_PROVIDERS} from 'angular2/http';
import {AppComponent}    from './app/app.component'

enableProdMode();

bootstrap(AppComponent, [JSONP_PROVIDERS]);
