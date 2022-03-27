// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';




export default async (req, res)=> {

  var data = JSON.stringify({
    "author": `urn:li:person:${req.body.id}`,
    "lifecycleState": "PUBLISHED",
    "specificContent": {
      "com.linkedin.ugc.ShareContent": {
        "shareCommentary": {
          "text": req.body.text
        },
        "shareMediaCategory": "NONE"
      }
    },
    "visibility": {
      "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
    }
  });
  var config = {
    method: 'post',
    url: 'https://api.linkedin.com/v2/ugcPosts',
    headers: { 
      'Authorization': `Bearer ${req.body.token}`, 
      'Content-Type': 'application/json', 
      'Cookie': 'lidc="b=OB19:s=O:r=O:a=O:p=O:g=3312:u=31:x=1:i=1647783172:t=1647816574:v=2:sig=AQEwL_a9fL31DqBsMAn7KOBpoGxo01yn"; bcookie="v=2&cf4552d5-5aa9-41e7-8c6c-58bdf1873e2c"; lidc="b=OB10:s=O:r=O:a=O:p=O:g=3549:u=1:x=1:i=1647731923:t=1647818323:v=2:sig=AQHqdfJHsxcyc94J0htQh71YnJSJ6Uv5"'
    },
    data : data
  };
  console.log("reached here");
    console.log(req.body);
  axios(config).then( (response)=> {
    console.log(response);
    res.send(response.data);
   }).catch( (error)=> {
    console.log(error);
   })
}
