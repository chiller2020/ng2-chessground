import {Component, Input, Output, EventEmitter} from '@angular/core';
import {AfterViewInit} from '@angular/core'
import {ChessGroundComponent} from './chessground.component';
import {GlyphButtonComponent} from './glyphbutton.component';
import { ChessGroundControlService } from './chessground-control.service';
import { ViewerButtonBar } from './viewer-buttonbar.component';
import { PgnInputText } from './pgninputtext.component';
import { ChessJsService } from './chessjs.service';

@Component({
  selector: 'chessground-pgnviewer',
  styles: [` `],
  template: `
                <chessground [width]="boardwidth" [height]="boardheight" [pieces]="pieces" [orientation]="orientation"></chessground>
                <viewer-buttonbar (do)="onButtonBarDo($event)" ></viewer-buttonbar>
                <pgninputtext></pgninputtext>
             `,
  directives: [ChessGroundComponent,ViewerButtonBar,PgnInputText],
  providers: [ChessGroundControlService, ChessJsService]

})
export class ChessGroundPgnViewerComponent implements AfterViewInit {

  private pgn: string = `
[Event "IBM Kasparov vs. Deep Blue Rematch"]
[Site "New York, NY USA"]
[Date "1997.05.11"]
[Round "6"]
[White "Deep Blue"]
[Black "Kasparov, Garry"]
[Opening "Caro-Kann: 4...Nd7"]
[ECO "B17"]
[Result "1-0"]
 
1.e4 c6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nd7 5.Ng5 Ngf6 6.Bd3 e6 7.N1f3 h6
8.Nxe6 Qe7 9.O-O fxe6 10.Bg6+ Kd8 {Kasparov schüttelt kurz den Kopf} 
11.Bf4 b5 12.a4 Bb7 13.Re1 Nd5 14.Bg3 Kc8 15.axb5 cxb5 16.Qd3 Bc6 
17.Bf5 exf5 18.Rxe7 Bxe7 19.c4 1-0`;
       
  private chessjs :any;
  
  boardwidth:string = '640px';
  boardheight:string = '640px';
  private pieces: string = "merida";
  orientation:string="white";

  

  constructor(private cgctrl: ChessGroundControlService, private chessjsservice: ChessJsService) {
  
  }

  ngAfterViewInit(){
     this.chessjs=this.chessjsservice.getNewInstance(); 
     this.chessjs.load_pgn(this.pgn);
     console.log(this.chessjs.history({ verbose: true }));
       
  }
  
  onButtonBarDo(event)
  {
    console.log(event);
  }
  
}