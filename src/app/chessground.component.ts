
var Chessground = require('chessground');
import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core'


@Component({
    selector: 'chessground',
    template:  `<div id='ground1' class="cburnett wood"></div>`,
   
})
export class ChessGroundComponent implements OnInit{
    
    gound :any; 
    ngOnInit()
    {
        var options = {
    orientation: 'white' 
    };
    
    

 this.gound = Chessground(document.getElementById("ground1"), options);
    }; 
    constructor()
    {
        
        
        
    }
    
 }
  