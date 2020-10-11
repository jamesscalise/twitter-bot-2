const config = require('./config');
const twit = require('twit');
const T = new twit(config)

const stream = T.stream('statuses/filter', {track: '#JavaScript'});

// use this to log errors from requests
function responseCallback (err, data, response) {
 console.log(err);
}

// event handler
stream.on('tweet', tweet => {
   // retweet
  T.post('statuses/retweet/:id', {id: tweet.id_str}, responseCallback);
  // like
  T.post('favorites/create', {id: tweet.id_str}, responseCallback);
});