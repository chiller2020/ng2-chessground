

import {Component, Input, ElementRef,ViewChild} from '@angular/core';
import {AfterViewInit} from '@angular/core'
import {ChessGroundComponent} from './chessground.component';
import { ChessGroundControlService } from './chessground-control.service';
import {ChessGroundSparePiecesComponent} from './chessground-sparepieces.component'

var _ = require('lodash');
var util = require('chessground').util;
var drag = require('chessground').drag;

@Component({
    selector: 'chessground-editor',
    template: `
               
                <chessground-sparepieces  [color]="'black'" [width]="sparepieceWidth" [height]="sparepieceHeight"></chessground-sparepieces>
                  <chessground [pieces]="pieces"></chessground>
                <chessground-sparepieces [width]="sparepieceWidth" [height]="sparepieceHeight"></chessground-sparepieces>
               
                     
              `,
    directives: [ChessGroundComponent,ChessGroundSparePiecesComponent],
    providers: [ChessGroundControlService]

})

export class ChessGroundEditorComponent implements AfterViewInit {

@ViewChild(ChessGroundSparePiecesComponent) sparePieces :ChessGroundSparePiecesComponent;

    private ground: any;
    private dragstarted: boolean = false;
    private dragKey: any;
    
    pieces: string ="merida";

    sparepieceWidth: string;
    sparepieceHeight: string;

    constructor(private cgctrl: ChessGroundControlService) {

    }
    
    
    startDrag(event)
    {   
         this.handoverSparePiece(event);
    }
    
    ngAfterViewInit() {
        // Component views are initialized
        this.ground = this.cgctrl.getGround();
        
        var clientWidth =  this.cgctrl.getWidthInPx();
        var clientHeight = this.cgctrl.getHeightInPx();
        
        this.sparepieceWidth = clientWidth.toString();
        
        this.sparepieceHeight =  (clientHeight/8).toString();
             
           
    }

    findFirstEmptySquare(k) {
        return !this.ground.data.pieces[k];

    };

    onMouseLeave(event) {
    }
    onMouseEnter(event) {
      this.handoverSparePiece(event);
    };
    handoverSparePiece(event)
    {
  
        if (this.dragstarted)
            return;

        this.dragstarted = true;

        var role = 'king';
        var color = 'white';

        var pieces = this.ground.data.pieces;

        var key = _.find(util.allKeys, this.findFirstEmptySquare.bind(this));
        console.log(key);

        this.dragKey = key;

        var coords = util.key2pos(this.ground.data.orientation === 'white' ? key : util.invertKey(key));

        var piece = {
            role: role,
            color: color
        };
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
