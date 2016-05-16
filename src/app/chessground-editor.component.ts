

import {Component, Input, ElementRef, ViewChild} from '@angular/core';
import {AfterViewInit} from '@angular/core'
import {ChessGroundComponent} from './chessground.component';
import { ChessGroundControlService } from './chessground-control.service';
import {ChessGroundSparePiecesComponent} from './chessground-sparepieces.component'

var _ = require('lodash');
var util = require('chessground').util;
var drag = require('chessground').drag;

@Component({
    selector: 'chessground-editor',
    template: ` <chessground-sparepieces  
                  (mousedownonpiece)="onMouseDownOnPiece($event)" 
                  [color]="spareupcolour"
                  [width]="sparepieceWidth"
                  [height]="sparepieceHeight"
                >
                </chessground-sparepieces>
                  <chessground [pieces]="pieces" [orientation]="orientation"></chessground>
                <chessground-sparepieces 
                  (mousedownonpiece)="onMouseDownOnPiece($event)" 
                  [color]="sparedowncolour" 
                  [width]="sparepieceWidth" 
                  [height]="sparepieceHeight"
                >
                </chessground-sparepieces>`,
    directives: [ChessGroundComponent, ChessGroundSparePiecesComponent],
    providers: [ChessGroundControlService]

})

export class ChessGroundEditorComponent implements AfterViewInit {

    @Input() orientation: string = 'white';

    private ground: any;
    private dragKey: any;
    private pieces: string = "merida";

    private sparepieceWidth: string;
    private sparepieceHeight: string;
    private spareupcolour: string = 'black';
    private sparedowncolour: string = 'white';

    constructor(private cgctrl: ChessGroundControlService) {

    }


    onMouseDownOnPiece(event) {
        var piece = { role: event.role, color: event.color };
        this.handoverSparePiece(event.event, piece);
    }

    ngAfterViewInit() {
        // Component views are initialized
        this.ground = this.cgctrl.getGround();

        var clientWidth = this.cgctrl.getWidthInPx();
        var clientHeight = this.cgctrl.getHeightInPx();

        this.sparepieceWidth = ((clientWidth / 18) * 6).toString();

        this.sparepieceHeight = (clientHeight / 18).toString();

        if (this.orientation == 'black') {
            this.spareupcolour = 'white';
            this.sparedowncolour = 'black';
        }

    }

    findFirstEmptySquare(k) {
        return !this.ground.data.pieces[k];

    };

    handoverSparePiece(event, piece) {
        var pieces = this.ground.data.pieces;

        var key = _.find(util.allKeys, this.findFirstEmptySquare.bind(this));
        console.log(key);

        this.dragKey = key;

        var coords = util.key2pos(this.ground.data.orientation === 'white' ? key : util.invertKey(key));

        var obj = {};
        obj[key] = piece;
        this.ground.setPieces(obj);
        console.log(obj);

        var bounds = this.ground.data.bounds();

        console.log('Bounds');
        console.log(bounds);

        //assume chessboard is 8*8 squares
        var squareSize = bounds.width / 8;

        var rel = [
            (coords[0] - 1) * squareSize + bounds.left,
            (8 - coords[1]) * squareSize + bounds.top
        ];

        this.ground.data.draggable.current = {
            orig: key,
            piece: piece.color + piece.role,
            rel: rel,
            epos: [event.clientX, event.clientY],
            pos: [event.clientX - rel[0], event.clientY - rel[1]],
            dec: [-squareSize / 2, -squareSize / 2],
            bounds: bounds,
            started: true
        };
        drag.processDrag(this.ground.data);

    }

}
