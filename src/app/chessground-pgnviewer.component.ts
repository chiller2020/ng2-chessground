import {Component, Input, Output, EventEmitter} from '@angular/core';
import {AfterViewInit} from '@angular/core'
import {ChessGroundComponent} from './chessground.component';

import { ChessGroundControlService } from './chessground-control.service';
import { ViewerButtonBarComponent } from './viewer-buttonbar.component';
import { PgnInputTextComponent } from './pgninputtext.component';
import { ChessJsService } from './chessjs.service';
import { PgnService } from './pgn.service';

@Component({
  selector: 'chessground-pgnviewer',
  styles: [` `],
  template: `
                <chessground [width]="boardwidth" [height]="boardheight" [pieces]="pieces" [orientation]="orientation"></chessground>
                <viewer-buttonbar (do)="onButtonBarDo($event)" ></viewer-buttonbar>
                <pgninputtext (onpgnsubmit)="onPgnSubmit($event)"></pgninputtext>
                
             `,
  directives: [ChessGroundComponent,ViewerButtonBarComponent,PgnInputTextComponent],
  providers: [ChessGroundControlService, ChessJsService,PgnService]

})
export class ChessGroundPgnViewerComponent implements AfterViewInit {

  private pgn: string = ``;
       
  private chessjs :any;
  
  boardwidth:string = '640px';
  boardheight:string = '640px';
  private pieces: string = "merida";
  orientation:string="white";

  

  constructor(private cgctrl: ChessGroundControlService, private chessjsservice: ChessJsService, private pgnservice: PgnService) {
  
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