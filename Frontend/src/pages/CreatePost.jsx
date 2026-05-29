import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'



const CreatePost = () => {
    const navigate = useNavigate();

   const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here

        const formData = new FormData(e.target);
      
        axios.post('http://localhost:3000/create-post', formData)
        .then((response) => {

            console.log('Post created successfully:', response.data); 
            navigate('/feed'); // Redirect to the main feed after successful post creation
        })
        .catch((error) => {
            console.error('Error creating post:', error);
        });
    };

  return (
  <section className='create-post-section'>
    <h1>Create Post</h1>
    <form onSubmit={handleSubmit} >
        <input type="file"  name="image" placeholder='Upload Image'  required/> 
        <input type="text" name="caption" placeholder='Enter caption ' required />
        <button type='submit'>Create Post </button>
    </form>
  </section>
  )
}

export default CreatePost