import {Component, Input, Output, EventEmitter} from '@angular/core';
import {AfterViewInit} from '@angular/core'
import {ChessGroundComponent} from './chessground.component';
import {GlyphButtonComponent} from './glyphbutton.component';
import { ChessGroundControlService } from './chessground-control.service';
import { ViewerButtonBarComponent } from './viewer-buttonbar.component';
import { PgnInputTextComponent } from './pgninputtext.component';
import { ChessJsService } from './chessjs.service';

@Component({
  selector: 'chessground-pgnviewer',
  styles: [` `],
  template: `
                <chessground [width]="boardwidth" [height]="boardheight" [pieces]="pieces" [orientation]="orientation"></chessground>
                <viewer-buttonbar (do)="onButtonBarDo($event)" ></viewer-buttonbar>
                <pgninputtext></pgninputtext>
                <glyphbutton></glyphbuttpn>
             `,
  directives: [ChessGroundComponent,ViewerButtonBarComponent,PgnInputTextComponent],
  providers: [ChessGroundControlService, ChessJsService]

})
export class ChessGroundPgnViewerComponent implements AfterViewInit {

  private pgn: string = ``;
       
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