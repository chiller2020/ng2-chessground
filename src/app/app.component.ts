
import {Component} from '@angular/core';
import {ChessGroundEditorComponent} from './chessground-editor.component'

@Component({
    selector: 'app',
    template: `<chessground-editor [orientation]="'white'"></chessground-editor>`,
    directives: [ChessGroundEditorComponent]
})
export class AppComponent { }
