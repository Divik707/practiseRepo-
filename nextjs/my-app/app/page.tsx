'use client'

import axios from "axios";
import { useEffect, useState } from "react"

export default function Home() {

  const [data, setData] = useState('');
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response => {
      setData(response.data)
      setLoader(false)
    })
  }, [])

  return(
    <div>
      {loader ? 'Loading...' : data.body}
    </div>
  )
}