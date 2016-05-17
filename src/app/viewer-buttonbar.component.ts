
import {Component,Input,Output,EventEmitter} from '@angular/core';
import {GlyphButtonComponent} from './glyphbutton.component'



@Component({
    selector: 'viewer-buttonbar',
    styles:[`.container{
               display: flex;
               padding-left:0;
             }
        
    }`],
    template: `<div [style.width.px]="width" class="container">
                  <glyphbutton (click)="onClick($event,'sb')" [name]="'step-backward'"></glyphbutton>
                  <glyphbutton (click)="onClick($event,'fb')" [name]="'fast-backward'"></glyphbutton>
                  <glyphbutton (click)="onClick($event,'ff')" [name]="'fast-forward'"></glyphbutton>
                  <glyphbutton (click)="onClick($event,'sf')" [name]="'step-forward'"></glyphbutton>
                  <glyphbutton (click)="onClick($event,'p')" [name]="'play'"></glyphbutton>
                  <glyphbutton (click)="onClick($event,'s')" [name]="'stop'"></glyphbutton>
              </div>`,
    directives: [GlyphButtonComponent]
})
export class ViewerButtonBarComponent { 
    
    @Input() width: number = 300;
    @Input() height: number = 50;  
    
    @Output() do: EventEmitter<any> = new EventEmitter();
    
    onClick(event,doval:string)
    {
        var value = { do: doval };
        this.do.emit(value);      
    }

    
}
