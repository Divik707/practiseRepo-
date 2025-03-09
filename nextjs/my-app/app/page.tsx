import axios from "axios"

export default async function Home() {
 const response =  await axios.get('https://jsonplaceholder.typicode.com/posts/1')
  const data = response.data;
  return(
    <div>
      {data ? data.body : 'laoding'}
    </div>
  )
}