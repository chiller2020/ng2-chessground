
import {Component,Input} from '@angular/core';
import {GlyphButtonComponent} from './glyphbutton.component'


@Component({
    selector: 'viewer-buttonbar',
    styles:[`.container{
               display: flex;
               padding-left:0;
             }
        
    }`],
    template: `<div [style.width.px]="width" class="container">
                  <glyphbutton [name]="'step-backward'"></glyphbutton>
                  <glyphbutton [name]="'fast-backward'"></glyphbutton>
                  <glyphbutton [name]="'fast-forward'"></glyphbutton>
                  <glyphbutton [name]="'step-forward'"></glyphbutton>
                  <glyphbutton [name]="'play'"></glyphbutton>
                  <glyphbutton [name]="'stop'"></glyphbutton>
              </div>`,
    directives: [GlyphButtonComponent]
})
export class ViewerButtonBar { 
    
    @Input() width: number = 300;
    @Input() height: number = 50;  

    
}
