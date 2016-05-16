
import {Component} from '@angular/core';
import {ChessGroundEditorComponent} from './chessground-editor.component'
import {ChessGroundPgnViewerComponent} from './chessground-pgnviewer.component'


@Component({
    selector: 'app',
    template: ` <chessground-pgnviewer [style.width]="'100%'" [style.height]="'100%'"></chessground-pgnviewer>
})
export class AppComponent { }


