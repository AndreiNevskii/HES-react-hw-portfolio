import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

import './Blog.css';

export default function Blog() {
    const [posts, setPosts] = useState([]);
   
    useEffect(() => {
        fetch('https://dummyjson.com/posts')
        .then((res) => {return res.json()})
        .then(data => setPosts(data.posts))
    }, [])


    return(
         <div className="blog">
           <h2>Посты</h2>
        <ul className="blog-list"> {
             posts.map((post) => (<Link key={post.id} className="list-item" to={`/blog/${post.id}`}>
           <li> {post.title}</li></Link>))
           } </ul>

        </div>
    )
}