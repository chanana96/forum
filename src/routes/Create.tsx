import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

function Create() {
  const [post, setPost] = useState({ Title: '', Post: '' });

  const handleSubmit = () => {};

  const handleChange = (e: any) => {
    setPost(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input type="text" value={post.Title} onChange={handleChange}></input>
        </label>
        <label>
          Content
          <input type="text" value={post.Post} onChange={handleChange}></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Create;
