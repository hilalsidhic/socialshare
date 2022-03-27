import axios from "axios";
import {useRouter} from "next/router";  
import AppContext from "../AppContext";
import { useEffect,useContext } from "react";
import Link from "next/link";
  
import React from 'react'


  
function  redirect() {
    const { query } = useRouter();
    const value = useContext(AppContext);
    const code = query.code;
    const router = useRouter();
    useEffect(() => {
        
        
        axios.post('api/linkedin-auth',{code: code}).then(response => {
            console.log(response.data);
            value.setLinkedinID(response.data.id);
            value.setLinkedinToken(response.data.localizedFirstName);
            value.setLinkedinState("success")
        })     
        console.log(value);
        router.push('/home');
         
     })
    
    return (
        <div>
            {code}
            <Link href="/home">Click    </Link>
        </div>
    );
}

export default redirect;