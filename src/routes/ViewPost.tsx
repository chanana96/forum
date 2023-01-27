import { useParams, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Card, Alert, Space } from 'antd';
import { useState } from 'react';

import Comments from './Comments';
import CreateComment from './CreateComment';
import UpdatePost from './UpdatePost';

type ViewPostPageParams = { postId: string };

function ViewPost() {
  const location = useLocation();
  const { value } = location.state;
  const [updatedValue, setUpdatedValue] = useState(value.Post);
  const [alert, setAlert] = useState(false);

  const { postId } = useParams<ViewPostPageParams>();

  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Card title={value.Title} style={{ width: 500 }}>
          <UpdatePost id={value.PostId} setUpdatedValue={setUpdatedValue} />
          <p>{updatedValue}</p>
        </Card>
        <Card title="Comments" style={{ width: 500 }}>
          {alert && (
            <Alert
              message="Field cannot be empty"
              type="error"
              closable
              onClose={() => setAlert(false)}
            />
          )}
          <CreateComment id={value.PostId} setAlert={setAlert} />
          <Comments id={value.PostId} />
        </Card>
      </Space>
    </div>
  );
}

export default observer(ViewPost);
