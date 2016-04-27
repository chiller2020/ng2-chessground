import "angular2/platform/browser";
import "angular2/core";
import "angular2/http";

// if we want everything ...
// import 'rxjs';

// otherwise, for a smaller bundle:
import "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


