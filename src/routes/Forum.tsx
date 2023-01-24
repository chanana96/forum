import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import ForumStore from '../stores/forumStore';

import { Link } from 'react-router-dom';

function Forum() {
  useEffect(() => {
    ForumStore.loadPosts();
  }, []);
  return (
    <div>
      <div>
        <Link to="/forum/create">Create post</Link>
      </div>
      <div>
        {ForumStore.posts.map((value: any, key) => {
          return (
            <div>
              <p>
                <Link to={`/forum/${value.PostId}`}>
                  <b>{value.Title}</b>
                </Link>
              </p>
              <p>{value.Post}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default observer(Forum);
