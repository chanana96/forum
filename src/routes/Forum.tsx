import React from 'react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Forum() {
  return (
    <div>
      <Link to="/forum/create">Create post</Link>
    </div>
  );
}

export default Forum;
