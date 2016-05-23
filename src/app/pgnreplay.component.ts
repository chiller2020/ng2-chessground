
import {Component} from '@angular/core';
import { ViewerButtonBarComponent } from './viewer-buttonbar.component';
import { PgnInputTextComponent } from './pgninputtext.component';


@Component({
    selector: 'pgnreplay',
    styles: [`
`],
    template: ` <viewer-buttonbar (do)="onButtonBarDo($event)" ></viewer-buttonbar>
                <pgninputtext (onpgnsubmit)="onPgnSubmit($event)"></pgninputtext>
                `,
    directives: [PgnInputTextComponent,ViewerButtonBarComponent]
})
export class PgnReplayComponent { 
    
    
    onButtonBarDo(event)
    {
        
    }
    
    onPgnSubmit(event)
    {
        
    }
    
}

