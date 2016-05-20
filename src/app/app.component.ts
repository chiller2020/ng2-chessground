
import {Component} from '@angular/core';
import {BoardEditorComponent} from './boardeditor.component'
import {PgnViewerComponent} from './pgnviewer.component'


@Component({
    selector: 'app',
    styles: [`
`],
    template: ` <pgnviewer [style.width]="'100%'" [style.height]="'100%'"></pgnviewer>
                `,
    directives: [PgnViewerComponent, BoardEditorComponent]
})
export class AppComponent { }



//`<boardeditor [style.width]="'100%'" [style.height]="'100%'"></boardeditor>`