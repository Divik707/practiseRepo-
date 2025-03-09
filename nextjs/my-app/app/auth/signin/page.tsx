'use client'
import axios from "axios";
import { useRef } from "react"

export default function() {

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function signin() {

        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post('http://localhost:3001/api/signin', {
            username,
            password
        })
        localStorage.setItem('token', response.data.token)
    }
    return(
        <div>
            <input type="text" placeholder="username" ref={usernameRef}/>
            <input type="text" placeholder="password" ref={passwordRef} />
            <button onClick={signin}>sign up</button>
        </div>
    )
}