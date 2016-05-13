
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
    
    @Input() pieces: string ='merida';
    @Input() board: string = 'wood';
    @Input() muuid: string = this.uuid.v4();
    @Input() width: string = '100%';
    @Input() height: string = '100%';
    @Input() options: any;

    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() move: EventEmitter<any> = new EventEmitter();
    @Output() select: EventEmitter<any> = new EventEmitter();

    ground: any;
    private defaultOptions: any = {
        orientation: 'white',
        coordinates: true,

        draggable: {
            enabled: true,        // allow moves & premoves to use drag'n drop
            distance: 3,          // minimum distance to initiate a drag, in pixels
            squareTarget: false,  // display big square target; intended for mobile
            centerPiece: true,    // center the piece on cursor at drag start
            showGhost: true,      // show ghost of piece being dragged
        },
        drawable: {
          enabled: true         // enable SVG circle and arrow drawing on the board
        },  
        events: {
            change: function () {this.onChange() }.bind(this),   // called after the situation changes on the board
            // called after a piece has been moved.
            // capturedPiece is null or like {color: 'white', 'role': 'queen'}
            move: function (orig, dest, capturedPiece) {this.onMove(orig,dest,capturedPiece) }.bind(this),
            select: function (key) { this.onSelect(key) }.bind(this) // called when a square is selected
        }

    };

    constructor(private cgctrl: ChessGroundControlService) {

    }

    onChange()
    {
        console.log('changed');
      
    }
    
    onMove(orig, dest, capturedPiece)
    {
        console.log('onmove');
        console.log(orig);
        console.log(dest);
        console.log(capturedPiece);
        
        
       
    }   
    onSelect(key)
    {
      console.log('onselect');
      console.log(key);
        
    }
    
    ngAfterViewInit() {

        this.ground = this.cgctrl.init(this.muuid, this.defaultOptions);

        if (this.options) {
            this.ground.set(this.options);
        }


    };


}
