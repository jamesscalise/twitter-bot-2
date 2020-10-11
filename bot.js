const config = require('./config');
const twit = require('twit');
const T = new twit(config)

function retweet(){
    params={
        q: '#got',
        result_type: 'recent',
        count: 100
    }


T.get('search/tweets', params, (err, data, response) => 
{
    let tweets = data.statuses
    if(!err)
    {
        for (let dat of tweets)
        {
            let retweetId = dat.id_str;
            T.post('statuses/retweet/:id', {id: retweetId}, (err, response)=>
            {
                if (response){
                    console.log('Retweeted!!!' + retweetId)
                }else{
                    console.log("something went wrong")
                }
            })
        }
    }
})}
setInterval(retweet, 15000)