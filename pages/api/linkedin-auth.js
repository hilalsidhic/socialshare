import axios from "axios";
import qs from "qs";

export default async (req, res) => {
  console.log(req.body);
  var data = qs.stringify({
    "Content-Type": " application/x-www-form-urlencoded",
    grant_type: "authorization_code",
    code: req.body.code,
    redirect_uri: "https://socialsharenew.vercel.app/redirect/",
    client_id: "86efr9wh25ebu7",
    client_secret: "wUjjrCnm78Dx7Fl2",
  });
  var config = {
    method: "post",
    url: "http://www.linkedin.com/oauth/v2/accessToken",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };
  var config_profile = {};

  axios(config)
    .then(function (response) {
      console.log("success");
      axios({
        method: "get",
        url: "https://api.linkedin.com/v2/me",
        headers: {
          Authorization:
            `Bearer ${response.data.access_token}`,
        },
      })
        .then(function (response1) {
          // res.write(response.data);
          // res.write(response1.data);
          response1.data.localizedFirstName= response.data.access_token
          // res.end();
          res.send(JSON.stringify(response1.data));
        })
        .catch(function (error1) {
          console.log("error1");
        });
      
    })
    .catch(function (error) {
      console.log("error");
    });
};
