
import {Component} from '@angular/core';
import {ChessGroundComponent} from './chessground.component'

@Component({
    selector: 'app',
    template: '<chessground></chessground>',
    directives:[ChessGroundComponent]
})
export class AppComponent { }
