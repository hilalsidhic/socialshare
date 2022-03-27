import axios from "axios";
export default (req, res) => {
    var config = {
        method: "get",
        url:`https://api.twitter.com/oauth/access_token?oauth_verifier=${req.body.oauth_verifier}&oauth_token=${req.body.oauth_token}`,
    }
    console.log(config);
    axios(config).then(function (response) {
        console.log(response.data);
        res.send(response.data);
    }).catch(function (error) {
        console.log(error);
    });
}