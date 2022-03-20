export default function handler(req, res) {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' })
      return
    }
    console.log("reached here");
    axios.post('https://graph.facebook.com/890213457674962/feed?message=HelloFans!second&access_token=EAAH9A2QKKSwBAO4fGqFLg4U7qpolRSB6KyZBQllgZCTCNp6JJRotsdLdqinVBsda9HGLCKZAGhaApTySPQhSsx9MHjF8NCB1aNVqWRypoWLoXhMwB9Ufkfl9vRSUAoZBItqOkIDggrd7LIsI2xU31Kt5uSGEtYjXNIrP8Cus5OscMjSGCRbN0pIUMSKzDtZCvIWvb9Vi1xKwuZBZCmPS0iH', article)
    .then(response =>
        console.log(response));
  
    // the rest of your code
  }