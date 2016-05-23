import {Component, Input, Output, EventEmitter} from '@angular/core';
import {AfterViewInit} from '@angular/core'
import {ChessGroundComponent} from './chessground.component';
import {PgnReplayComponent} from './pgnreplay.component';

import { ChessGroundService } from './chessground.service';

import { ChessJsService } from './chessjs.service';
import { PgnService } from './pgn.service';

@Component({
  selector: 'pgnviewer',
  styles: [`.container {
  display: flex;
  
}
 `],
  template: `   <div class="container">
                <chessground [width]="boardwidth" [height]="boardheight" [pieces]="pieces" [orientation]="orientation"></chessground>
                <pgnreplay></pgnreplay>
                </div>
             `,
  directives: [ChessGroundComponent,PgnReplayComponent],
  providers: [ChessGroundService, ChessJsService,PgnService]

})
export class PgnViewerComponent implements AfterViewInit {

  private pgn: string = ``;
       
  private chessjs :any;
  
  boardwidth:string = '640px';
  boardheight:string = '640px';
  private pieces: string = "merida";
  orientation:string="white";

  constructor(private cgctrl: ChessGroundService, private chessjsservice: ChessJsService, private pgnservice: PgnService) {
  
  }
  
  onPgnSubmit(event)
  {
    
    let pgn: string = this.pgnservice.cleanUpPgn(event.pgn);
    this.chessjs.load_pgn(pgn);
    console.log(pgn);
    console.log(this.chessjs.history({ verbose: true }));
  }

  ngAfterViewInit(){
     this.chessjs=this.chessjsservice.getNewInstance(); 
    
  }
  
  onButtonBarDo(event)
  {
    console.log(event);
  }
  
}