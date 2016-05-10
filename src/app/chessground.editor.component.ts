

import {Component, Input, ElementRef} from '@angular/core';
import {AfterViewInit} from '@angular/core'
import {ChessGroundComponent} from './chessground.component';
import { ChessGroundControlService } from './chessground-control.service';

var _ = require('lodash');
var util = require('chessground').util;
var drag = require('chessground').drag;

@Component({
    selector: 'chessground-editor',
    template: `<chessground (mouseenter)="onMouseEnter($event)" (mouseleave)="onMouseLeave($event)"></chessground>`,
    directives: [ChessGroundComponent],
    providers: [ChessGroundControlService]

})
export class ChessGroundEditorComponent implements AfterViewInit {

    ground: any;
    dragstarted: boolean = false;
    dragKey: any;

    constructor(private cgctrl: ChessGroundControlService) {

    }

    ngAfterViewInit() {
        // Component views are initialized
        this.ground = this.cgctrl.getGround();
    }

    findfunc(k) {
        return !this.ground.data.pieces[k];


    };

    onMouseLeave(event) {
    }
    onMouseEnter(event) {



        if (this.dragstarted)
            return;

        this.dragstarted = true;

        var role = 'king';
        var color = 'white';

        var pieces = this.ground.data.pieces;

        var key = _.find(util.allKeys, this.findfunc.bind(this));
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

        var squareSize = bounds.width / 8;// = event.target.parentNode.parentNode.getBoundingClientRect();


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
            //pos: [event.clientX, event.clientY] ,
            dec: [-squareSize / 2, -squareSize / 2],
            bounds: bounds,
            started: true
        };
        drag.processDrag(this.ground.data);

    };

    //<div [id]="muuid" (window:mousemove)=onWindowMouseMove($event) (mouseleave)="onMouseLeave($event)" (mouseout)="onMouseOut($event)" (mouseenter)="onMouseEnter($event)"   [style.width]="width" [style.height]="height" [ngClass]="[pieces,board]"></div> 


}
