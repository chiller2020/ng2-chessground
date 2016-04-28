
var Chessground = require('chessground');
var uuid = require('uuid');
import {Component, Input} from 'angular2/core';
import {AfterViewInit} from 'angular2/core'


@Component({
    selector: 'chessground',
    template: `<div [id]="muuid"  [style.width.px]="width" [style.height.px]="height" [ngClass]="[pieces,board]" ></div>`,

})
export class ChessGroundComponent implements AfterViewInit {

    ground: any;
    @Input() pieces: string = 'merida';
    @Input() board: string = 'wood';
    @Input() muuid: string = uuid.v4();
    @Input() width: string ='400';
    @Input() height: string ='400';
    

    ngAfterViewInit() {
        var options = {
            orientation: 'white'
        };

        this.ground = Chessground(document.getElementById(this.muuid), options);
    };
    constructor() {


    }

}
