import {Component, Input, Output, EventEmitter} from '@angular/core';
import {AfterViewInit} from '@angular/core'
import {ChessGroundComponent} from './chessground.component';
import {PgnReplayComponent} from './pgnreplay.component';

import { ChessGroundService } from './chessground.service';

import { ChessJsService } from './chessjs.service';
import { ScalaChessJsService } from './scalachessjs.service';
import { PgnService } from './pgn.service';

@Component({
  selector: 'pgnviewer',
  template: `   <div class="pgnviewercontainer">
                <chessground [width]="boardwidth" [height]="boardheight" [pieces]="pieces" [orientation]="orientation"></chessground>
                <pgnreplay (pgnsubmit)="onPgnSubmit($event)"></pgnreplay>
                </div>
             `,
  directives: [ChessGroundComponent,PgnReplayComponent],
  providers: [ChessGroundService, ChessJsService,ScalaChessJsService,PgnService]

})
export class PgnViewerComponent implements AfterViewInit {

  private pgn: string = ``;
       
  private chessjs :any;
  
  
  
  boardwidth:string = '99vh';
  boardheight:string = '99vh';
  private pieces: string = "merida";
  orientation:string="white";
  scalachessjssubscription: any;

  constructor(private cgctrl: ChessGroundService, private chessjsservice: ChessJsService, private scalachessjsservice: ScalaChessJsService, private pgnservice: PgnService) {
  
  this.scalachessjssubscription =  this.scalachessjsservice.getResponseEvent().subscribe(this.onTest); 
  
  }
  
  onTest(e)
  {
    console.log(e); 
  }
  
  onPgnSubmit(event)
  {
    
    let pgn: string = this.pgnservice.cleanUpPgn(event.pgn);
    this.scalachessjsservice.postReadPgn(pgn);
    //this.chessjs.load_pgn(pgn);
    //console.log(this.chessjs.history({ verbose: true }));
    
    
  }

  ngAfterViewInit(){
     this.chessjs=this.chessjsservice.getNewInstance(); 
     
             
     
    
  }
  
  onButtonBarDo(event)
  {
    console.log(event);
  }
  
}