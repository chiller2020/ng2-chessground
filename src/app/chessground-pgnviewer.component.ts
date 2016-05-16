import {Component, Input, Output, EventEmitter} from '@angular/core';
import {AfterViewInit} from '@angular/core'
import {ChessGroundComponent} from './chessground.component';
import {GlyphButtonComponent} from './glyphbutton.component';
import { ChessGroundControlService } from './chessground-control.service';
import { ViewerButtonBar } from './viewer-buttonbar.component';
import { ChessJsService } from './chessjs.service';

@Component({
  selector: 'chessground-pgnviewer',
  styles: [` `],
  template: `
                <chessground [width]="boardwidth" [height]="boardheight" [pieces]="pieces" [orientation]="orientation"></chessground>
                <viewer-buttonbar></viewer-buttonbar>
             `,
  directives: [ChessGroundComponent,ViewerButtonBar],
  providers: [ChessGroundControlService, ChessJsService]

})
export class ChessGroundPgnViewerComponent implements AfterViewInit {

  private pgn: string;
  private chessjs :any;
  
  boardwidth:string = '640px';
  boardheight:string = '640px';
  private pieces: string = "merida";
  orientation:string="white";
  

  constructor(private cgctrl: ChessGroundControlService, private chessjsservice: ChessJsService) {
  
  }

  ngAfterViewInit(){
     this.chessjs=this.chessjsservice.getNewInstance(); 
       
  }
}