
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {AfterViewInit} from '@angular/core'
import { ChessGroundControlService } from './chessground-control.service';


@Component({
    selector: 'chessground',
    template: `
                 <div [id]="muuid"  [style.width]="width" [style.height]="height" [ngClass]="[pieces,board]"></div>
              `

})
export class ChessGroundComponent implements AfterViewInit {


    uuid = require('uuid');

    @Input() pieces: string = 'merida';
    @Input() board: string = 'wood';
    @Input() muuid: string = this.uuid.v4();
    @Input() width: string = '100%';
    @Input() height: string = '100%';
    @Input() options: any;
    @Input() orientation: any = 'white';

    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() move: EventEmitter<any> = new EventEmitter();
    @Output() select: EventEmitter<any> = new EventEmitter();

    ground: any;
    private defaultOptions: any;

    constructor(private cgctrl: ChessGroundControlService) {

    }

    onChange() {

    }

    onChangeDrawable(shapes) {
    }

    onMove(orig, dest, capturedPiece) {


    }
    onSelect(key) {

    }

    ngAfterViewInit() {

        this.defaultOptions = {
            orientation: this.orientation,
            coordinates: true,

            draggable: {
                enabled: true,        // allow moves & premoves to use drag'n drop
                distance: 3,          // minimum distance to initiate a drag, in pixels
                squareTarget: false,  // display big square target; intended for mobile
                centerPiece: true,    // center the piece on cursor at drag start
                showGhost: true,      // show ghost of piece being dragged
            },
            drawable: {
                enabled: true,
                onChange: this.onChangeDrawable
                // enable SVG circle and arrow drawing on the board
            },
            events: {
                change: this.onChange,   // called after the situation changes on the board
                // called after a piece has been moved.
                // capturedPiece is null or like {color: 'white', 'role': 'queen'}
                move: this.onMove,
                select: this.onSelect // called when a square is selected
            },
            movable: {
                free: true,           // all moves are valid - board editor
                color: "both",        // color that can move. "white" | "black" | "both" | null
                dropOff: "trash"    // when a piece is dropped outside the board. "revert" | "trash"
            }

        };

        this.ground = this.cgctrl.init(this.muuid, this.defaultOptions);

        if (this.options) {
            this.ground.set(this.options);
        }


    };


}
