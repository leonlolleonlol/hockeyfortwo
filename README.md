# hockeyfortwo  
Live online hockey game to be continued...  
Source: [danielstuts](https://www.youtube.com/watch?v=PXBy6pB4mTU&list=PLo6lBZn6hgcZ4-xQFjDPfWnONyq9vFnh9&index=1)  
Some new modifications:
1. const io = require('socket.io')(server, { cors: { origin: '*' } }) // Enable CORS for all origins (not recommended for production)  
Since Socket.IO v3, CORS is disabled by default.
