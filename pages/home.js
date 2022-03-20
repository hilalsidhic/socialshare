import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Container, TextField } from '@material-ui/core';
import { ThemeProvider } from '@mui/material/styles';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import {useState} from 'react';



export default function SimplePaper() {
    const [text, settext] = useState("")
    async function fbbuttonClicked() {
        console.log('Button clicked');
        console.log(text);
        let returnhere = await axios.post(`https://graph.facebook.com/890213457674962/feed?message=${text}&access_token=EAAH9A2QKKSwBAJbqxiGJ2BnfkuuM20r8CMahp8dkGd7ALvdXKXAwZAv2grhJQVKj8mT8JUvWhv4dwtaiiZCzKNLCqB0FJJUAqlTRZBopNoaROGQG0sbRhtXw3zJJ3vt5QZBZBHuSeAVwZA3qZCGHDw32KC0chrNVOP1v7vnFttFn9PqwfA0H6X3OJMPgSLiJod9KMm5L2mxbgZDZD`)
        alert("Posted to Facebook", returnhere.data.id);
    }
    async function linkedinbuttonclicked(){
        console.log('Button clicked');
        console.log(text);
        var news = await axios.post('/api/hello',{text: text});
        console.log(news);
    }
    async function twitterbuttonclicked(){
        console.log('Button clicked twitter');
        console.log(text);
        var news1 = await axios.post('/api/twitter',{text: text});
        console.log(news1);
    }
    async function addvalue(val){
        console.log(val);
        settext(val);
    }
  return (
    <Container>
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        '& > :not(style)': {
          m: 1,
          width: 300,
          height: 300,
        },
      }}
    >
      <Paper elevation={21} sx={{display: 'flex', alignItems: 'center',justifyContent: 'center'}} id="paper">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e)=>addvalue(e.target.value)}/>
       </Paper>
    </Box>
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        '& > :not(style)': {
          m: 1,
          marginTop: '40px',
        },
      }}
    >
      <Button variant="contained" color="primary" onClick={fbbuttonClicked}>
        Message on Facebook
      </Button>
      <Button variant="contained" color="secondary" onClick={linkedinbuttonclicked}>
        Message on Linkedin
      </Button>
      <Button variant="contained" color="primary" onClick={twitterbuttonclicked}>
        Message on Twitter
      </Button>
    </Box>
    </Container>
  );
    }
