import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ChessGroundPieceComponent} from './chessground-piece.component'


@Component({
    selector:'chessground-sparepieces',
    styles:[`.container{
               display: flex;
               padding-left:0;
             }
             
             { 
               height:140%;
               width:100%; 
               top:-25% 
             }
             
    `],
    template:`    <div class="container" [style.width.px]="width" [style.height.px]="height" style="background-color:red;">
             
                     <chessground-piece [color]="color" [piece]="''" [height]="height" [width]="width" ></chessground-piece>
                    <chessground-piece (mousedown)="onMouseDown($event,'pawn')" [color]="color" [piece]="'pawn'" [height]="height" [width]="width" ></chessground-piece>
                    <chessground-piece (mousedown)="onMouseDown($event,'bishop')" [color]="color" [piece]="'bishop'" [height]="height" [width]="height" ></chessground-piece>
                    <chessground-piece (mousedown)="onMouseDown($event,'knight')" [color]="color" [piece]="'knight'" [height]="height" [width]="height" ></chessground-piece>
                    <chessground-piece (mousedown)="onMouseDown($event,'rook')" [color]="color" [piece]="'rook'" [height]="height" [width]="height" ></chessground-piece>
                    <chessground-piece (mousedown)="onMouseDown($event,'queen')" [color]="color" [piece]="'queen'" [height]="height" [width]="height" ></chessground-piece>
                    <chessground-piece (mousedown)="onMouseDown($event,'king')" [color]="color" [piece]="'king'" [height]="height" [width]="height" ></chessground-piece>
                   
                  </div>
             `, 
     directives:[ChessGroundPieceComponent]
    
})
export class ChessGroundSparePiecesComponent{
  
  @Input() width: number = 0;
  @Input() height: number = 0;
  @Input() pieces: string = 'merida';
  @Input() color: string = 'white';
  @Input() is3d: boolean = false;
  
  @Output() mousedownonpiece: EventEmitter<any> = new EventEmitter();
  
  constructor(){
    
  }
  
  onMouseDown(event,piecename)
  {
    console.log(event);
    console.log(piecename);
    console.log(this.color);
    
  }
  
  
  
}