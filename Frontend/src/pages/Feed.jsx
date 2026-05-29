import React , {useState, useEffect} from 'react'
import axios from 'axios'

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            image: 'https://www.pexels.com/photo/lion-s-head-mountain-overlooking-cape-town-34568018/',
            caption: 'This is a sample post'
        }
    ])
useEffect(() => {
   axios.get('http://localhost:3000/posts') 
   .then(response => {
    setPosts(response.data.post)
   })
   .catch(error => {
    console.error('Error fetching posts:', error)
   })
},[])


  return (
    <section className='feed-section'>
      <h1>Feed</h1>
      {
      posts.length === 0 ? (
        <p>No posts available</p>
      ) : 
      posts.map(post => (
        <div key={post.id} className='post'>
            <img src={post.image} alt={post.caption} className='post-cart'/>
            <p>{post.caption}</p>
        </div>
        
      ))}   

    </section>
  )
}

export default Feed