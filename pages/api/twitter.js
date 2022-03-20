import SocialPost from "social-post-api"
export default async (req, res) => {

    console.log(process.env.TWITTER_API_KEY);
    const social = new SocialPost(process.env.TWITTER_API_KEY);  
    const post = await social.post({
          "post": req.body.text,
          "platforms": ["twitter"]
    })
    console.log(post);

}