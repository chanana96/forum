import React from 'react';
import { Link } from 'react-router-dom';

function NoPage() {
  return (
    <div>
      <h1>Error 404</h1>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default NoPage;
