
var Chessground = require('chessground');
var uuid = require('uuid');
import {Component, Input, ElementRef} from 'angular2/core';
import {AfterViewInit} from 'angular2/core'


@Component({
    selector: 'chessground',
    template: `<div [style.width]="width" [style.height]="height"><div [id]="muuid"  [style.width]="width" [style.height]="height" [ngClass]="[pieces,board]"></div>`,

})
export class ChessGroundComponent implements AfterViewInit {

    ground: any;
    @Input() pieces: string = 'staunton';
    @Input() is3d: boolean;
    @Input() board: string = 'wood';
    @Input() muuid: string = uuid.v4(); 
    @Input() width: string = '100%';
    @Input() height: string = '100%';
    
    ngAfterViewInit() {   
        var options = {
            orientation: 'white'  
        };

        this.ground = Chessground(document.getElementById(this.muuid), options);
    };

    constructor() {

    
    };

}
