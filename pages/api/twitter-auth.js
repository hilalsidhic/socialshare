import axios from "axios";
export default async (req, res) => {
  var config = {
    method: "post",
    url: "https://api.twitter.com/oauth/request_token",
    headers: {
      Authorization:
      'OAuth oauth_consumer_key="T07uZs71X1Byhk3Nr8A3ecPNt",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1648406294",oauth_nonce="e78dGuwATOD",oauth_version="1.0",oauth_signature="tm6BxZ%2F5Nv5FTMEsYDwM3EDJaok%3D"', 
       },
  };
 

  axios(config)
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
