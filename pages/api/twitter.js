import Twitter from "twitter";
export default async (req, res) => {

    var client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: req.body.oauth_token,
        access_token_secret: req.body.oauth_secret
      });

      client.post('statuses/update', {status: req.body.text},  function(error, tweet, response) {
          console.log(process.env.TWITTER_CONSUMER_KEY);
        if(error){
            console.log("error"); throw error;
        } 
        console.log(tweet);  // Tweet body.
          // Raw response object.
        res.send(response);
      });

}