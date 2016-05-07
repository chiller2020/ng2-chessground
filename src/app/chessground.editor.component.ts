

import {Component, Input, ElementRef} from '@angular/core';
import {AfterViewInit} from '@angular/core'
import {ChessGroundComponent} from './chessground.component';


@Component({
    selector: 'chessground-editor',
    template: `<chessground></chessground>`,
    directives:[ChessGroundComponent]

})
export class ChessGroundEditorComponent  {

   

   
    constructor() {

    };

}
