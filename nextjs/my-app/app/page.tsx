import axios from "axios"

export default async function Home() {
  const value = await axios.get('http://localhost:3001/api')
  const data = value.data;

  return(
    <div>
      {data ? data.username : 'Loading...'}
    </div>
  )
}