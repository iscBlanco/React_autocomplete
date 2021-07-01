import React from 'react'
import axios from "axios"
export default function App() {
    const [posts, setPosts] = React.useState([])
    const [searchInput, setSearchInput] = React.useState("")

    React.useEffect(()=>{
        const fetchPost = async( ) =>{
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setPosts(res.data)
        }
        fetchPost()
    },[])
    console.log(posts)
    let postTitles = posts
        .filter(({title})=> title.indexOf(searchInput.toLowerCase()) > -1)
        .map(post=>(
        <li key={post.id}>{post.title}</li>
    ))
    return (
        <div>
            <h1>Autocomplete app</h1>
            <input
                value={searchInput}
                onChange={(e)=>setSearchInput(e.target.value)}
            />
            <ul>
                {postTitles}
            </ul>
            

        </div>
    )
}
