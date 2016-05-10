
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

    @Output() hello: EventEmitter<any> = new EventEmitter();

    dragstarted: boolean = false;
    dragKey: any;
    ground: any;

    constructor(private cgctrl: ChessGroundControlService) {

    }

    ngAfterViewInit() {

        var options = {
            orientation: 'white',
            coordinates: true,

            draggable: {
                enabled: true,        // allow moves & premoves to use drag'n drop
                distance: 3,          // minimum distance to initiate a drag, in pixels
                squareTarget: false,  // display big square target; intended for mobile
                centerPiece: true,    // center the piece on cursor at drag start
                showGhost: true,      // show ghost of piece being dragged
            }
        };

        this.ground = this.cgctrl.init(this.muuid, options);

    };


}
