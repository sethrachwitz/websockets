# websockets

This repo holds the code for 3 websockets demos.  1 and 2 are easy to run, 3 is nearly impossible due to certain dependencies like `socket.io-php-emitter` not being in development since `Socket.io` was pre version 1.

You can see a live demo of demo 3 at http://websockets.popecobra.com where I have old versions of `Socket.io` and `socket.io-php-emitter` that play well together, and the code used to generate that page is exactly the same as the code in this repo, except for a different domain and port that `Socket.io` connects to.

Before running demo 1 or 2, just install `node` and `Socket.io`.

```
brew install node
npm install socket.io
```

To run the demos, just `cd` into the demo you want and run `node server.js` and go to `localhost:8080` in your browser.
