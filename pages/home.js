import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, Container, TextField } from "@material-ui/core";
import { ThemeProvider } from "@mui/material/styles";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import AppContext from "../AppContext";
import { Checkbox, Chip } from "@mui/material";

export default function SimplePaper() {
  const value = useContext(AppContext);
  useEffect(() => {
    console.log(value);
  });
  const [text, settext] = useState("");

  console.log(value.LinkedinState);
  async function fbbuttonClicked() {
    console.log("Button clicked");
    console.log(text);
    let returnhere = await axios.post(
      `https://graph.facebook.com/890213457674962/feed?message=${text}&access_token=EAAH9A2QKKSwBAJbqxiGJ2BnfkuuM20r8CMahp8dkGd7ALvdXKXAwZAv2grhJQVKj8mT8JUvWhv4dwtaiiZCzKNLCqB0FJJUAqlTRZBopNoaROGQG0sbRhtXw3zJJ3vt5QZBZBHuSeAVwZA3qZCGHDw32KC0chrNVOP1v7vnFttFn9PqwfA0H6X3OJMPgSLiJod9KMm5L2mxbgZDZD`
    );
    alert("Posted to Fadcebook", returnhere.data.id);
  }

  async function linkedinbuttonclicked() {
    console.log("Button clicked");
    console.log(text);
    if(value.LinkedinState==="success"){
      console.log("reached here")
      let linkedin=await axios.post('api/linkedin',{text:text,id:value.LinkedinID,token:value.LinkedinToken})
      alert("Posted to Linkedin  "+ linkedin.data.id);
    } 
    else{
      window.location.href =
      "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86efr9wh25ebu7&redirect_uri=http://localhost:3000/redirect/&state=foobar&scope=r_liteprofile%20r_emailaddress%20w_member_social";
    }
    
  }
  async function twitterbuttonclicked() {
    console.log("Button clicked twitter");
    console.log(text);
    // var news1 = await axios.post('/api/twitter',{text: text});
    // console.log(news1);
    if(value.TwitterState==="success"){
      console.log("reached here")
      var news1=await axios.post('/api/twitter',{text: text,oauth_token: value.TwitterToken,oauth_secret: value.TwitterSecret})
      console.log(news1.data)
      alert("Posted to twitter")
    }
    else{
      let step1=await axios.post('/api/twitter-auth')
       console.log(step1);
    // let step2=await axios.post('/api/twitter-auth2',{text:step1.data})
      window.location.href = `https://api.twitter.com/oauth/authorize?${step1.data}`;
    }
    
  }
    

  async function addvalue(val) {
    console.log(val);
    settext(val);
  }
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          "& > :not(style)": {
            m: 1,
            width: 300,
            height: 300,
          },
        }}
      >
        <Paper
          elevation={21}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          id="paper"
        >
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            onChange={(e) => addvalue(e.target.value)}
          />
        </Paper>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          "& > :not(style)": {
            m: 1,
            marginTop: "40px",
          },
        }}
      >
        <Button variant="contained" color="primary" onClick={fbbuttonClicked}>
          Message on Facebook
        </Button>
      
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          "& > :not(style)": {
            m: 1,
            marginTop: "40px",
          },
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={linkedinbuttonclicked}
        >
          Message on Linkedin{" "}
          
        </Button>
        
        <Chip color="primary" label={value.LinkedinState === "success" ? "Logged In" : 
        "Not Logged In" }  />
        
        
        </Box>
        <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          "& > :not(style)": {
            m: 1,
            marginTop: "40px",
          },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={twitterbuttonclicked}
        >
          Message on Twitter
        </Button>
        
        <Chip color="primary" label={value.TwitterState === "success" ? "Logged In" : 
        "Not Logged In" }  />
        
        
        </Box>
        
        
      </Box>
    </Container>
  );
}
