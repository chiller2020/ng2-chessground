#Angular2 Webpack Polyfill
A simple starter example showing Angular2 bundled using webpack with polyfill.io service.

## Setup

    npm install

Run dev server

    npm start

Build deployment

    npm run build

## Polyfill service
The polyfill downloaded is based on the browser user agent. The lack of Intl support in Safari
is the reason for it being the largest (currently used in number pipe formatting). Using the
separate polyfill service prevents other browser users from having to pay the download price
for Safari support.

### Polyfill download size (compressed)

Browser | Size
--- | ---
Chrome | 911 bytes
Firefox | 0.32 Kb
Safari | 15.11 Kb
Edge | 1.12 Kb
IE 11 | 2.3 Kb

## IE Fix

The `src/ie-fix.ts` file is based on [this comment](https://github.com/angular/angular/issues/6501#issuecomment-181145904)
by @justindujardin