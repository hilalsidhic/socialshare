import { textTransform } from "@mui/system";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import AppContext from "../AppContext";
import React from 'react'

function Twitterredirect() {
    const {query} = useRouter()
    const value = useContext(AppContext);
    const router = useRouter()
    useEffect(() => {
      axios.post('/api/twitter-auth2',{oauth_verifier: query.oauth_verifier,oauth_token: query.oauth_token}).then(response => {
        console.log(JSON.stringify(response.data));
        const myarray=response.data.split("&");
        const oauth_token_full=myarray[0].split("=");
        const token_key=oauth_token_full[1];
        value.setTwitterToken(token_key);
        console.log(token_key);
        const oauth_secret_full=myarray[1].split("=");
        const token_secret=oauth_secret_full[1];
        value.setTwitterSecret(token_secret);
        console.log(token_secret);
        value.setTwitterState("success")
        router.push('/home');
      })
    
    })
    
    return (
        <div>
            {query.oauth_token}
            <br/>
            {query.oauth_verifier}
        </div>
    );
}

export default Twitterredirect;