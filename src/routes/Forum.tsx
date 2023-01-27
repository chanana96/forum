import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { List } from 'antd';

import DeletePost from './DeletePost';
import ForumStore from '../stores/forumStore';

function Forum() {
  useEffect(() => {
    ForumStore.loadPosts();
  }, []);
  return (
    <List
      dataSource={ForumStore.posts}
      renderItem={(item: any) => (
        <List.Item>
          <List.Item.Meta
            title={
              <Link to={`/forum/${item.PostId}`} state={{ value: { ...item } }}>
                <b>{item.Title}</b>
              </Link>
            }
            description={item.Post}
          />
          <DeletePost id={item.PostId} />
        </List.Item>
      )}
    />
  );
}

export default observer(Forum);
