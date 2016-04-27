#chessground-ng2wrap

Angular 2 wrapper for https://github.com/ornicar/chessground

Build environment is based on https://github.com/CaptainCodeman/angular2-webpack-polyfill

Work in early progress.

## Setup

    npm install
    
    Note! chessground has to be built after install
    
    cd node_modules_chessground
    
    npm install
    
    gulp

Run dev server

    npm start

Build deployment

    npm run build

## IE Fix

The `src/ie-fix.ts` file is based on [this comment](https://github.com/angular/angular/issues/6501#issuecomment-181145904)
by @justindujardin