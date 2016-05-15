import {Component, Input, Output, EventEmitter} from '@angular/core';
import {AfterViewInit} from '@angular/core'
import {ChessGroundComponent} from './chessground.component';
import { ChessGroundControlService } from './chessground-control.service';

@Component({
  selector: 'chessground-pgnviewer',
  styles: [` `],
  template: `<div  [style.width]="width" [style.height.px]="height">
  
             
  
             </div>`,
  directives: [ChessGroundComponent],
  providers: [ChessGroundControlService]
  
})
export class ChessGroundPgnViewerComponent {


  constructor() {

  }
}