import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

function Create() {
  const [post, setPost] = useState({ Title: '', Post: '' });

  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        'http://localhost:5000/forum/create/post/',
        JSON.stringify(post),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e: any) => {
    const value = e.target.value;
    setPost((prevPost) => ({ ...prevPost, [e.target.name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            value={post.Title}
            onChange={handleChange}
            name="Title"></input>
        </label>
        <label>
          Content
          <input
            type="text"
            value={post.Post}
            onChange={handleChange}
            name="Post"></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Create;
