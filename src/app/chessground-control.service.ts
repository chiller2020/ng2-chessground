import { Injectable } from '@angular/core';


@Injectable()
export class ChessGroundControlService {

  Chessground = require('chessground');

  ground: any;

  constructor() {

  }

  init(id: string, options: any) {
    this.ground = this.Chessground(document.getElementById(id), options);

    return this.ground;
  }

  set(options: any) {
    this.ground.set(options);
  }

  getGround() {
    return this.ground;
  }

}