'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react"

export default function() {

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const router = useRouter()
    async function signup() {

        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post('http://localhost:3001/api/singup', {
            username,
            password
        })
        router.push('/auth/signin')
    }
    return(
        <div>
            <input type="text" placeholder="username" ref={usernameRef}/>
            <input type="text" placeholder="password" ref={passwordRef} />
            <button onClick={signup}>sign up</button>
        </div>
    )
}