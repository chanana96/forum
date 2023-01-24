import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
type ViewPostPageParams = { postId: string };
function ViewPost() {
  const { postId } = useParams<ViewPostPageParams>();
  return (
    <div>
      <p>asdf</p>
    </div>
  );
}

export default ViewPost;
