require('./styles.css');
import {enableProdMode}  from '@angular/core';
import {bootstrap}       from '@angular/platform-browser-dynamic'
import {JSONP_PROVIDERS} from '@angular/http';
import {AppComponent}    from './app/app.component'



enableProdMode();

bootstrap(AppComponent, [JSONP_PROVIDERS]);
