

import {Component, Input, ElementRef} from '@angular/core';
import {AfterViewInit} from '@angular/core'


@Component({
    selector: 'chessground',
    template: `<div [id]="muuid"  [style.width]="width" [style.height]="height" [ngClass]="[pieces,board]"></div>`

})
export class ChessGroundComponent implements AfterViewInit {

    Chessground = require('chessground');
    uuid = require('uuid');

    ground: any;
    @Input() pieces: string = 'staunton';
    @Input() board: string = 'wood';
    @Input() muuid: string = this.uuid.v4();
    @Input() width: string = '100%';
    @Input() height: string = '100%';

    ngAfterViewInit() {

        var options = {
            orientation: 'white'
        };

        this.ground = this.Chessground(document.getElementById(this.muuid), options);
    };

    getGround() {
        return this.ground;
    };
    
    setOptions(options: any)
    {
        this.ground.setOptions(options);
    }

    constructor() {

    };

}
