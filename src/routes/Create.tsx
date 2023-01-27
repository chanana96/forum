import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Input, Alert } from 'antd';
const { TextArea } = Input;
function Create() {
  const [post, setPost] = useState({ Title: '', Post: '' });
  const [alert, setAlert] = useState(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      const data = post;
      setAlert(1);
      setPost({ Title: '', Post: '' });
      await axios.post('http://localhost:5000/forum/create/post/', data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPost((prevPost) => ({ ...prevPost, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <Form
        onFinish={(e) => {
          if (post.Title == '' || post.Post == '') {
            setAlert(2);
            return;
          }
          handleSubmit(e);
        }}
        name="basic"
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, marginTop: '30px' }}>
        {alert === 1 && (
          <Alert
            message="Post created"
            type="success"
            closable
            onClose={() => setAlert(0)}
          />
        )}
        {alert === 2 && (
          <Alert
            message="Fields cannot be empty"
            type="error"
            closable
            onClose={() => setAlert(0)}
          />
        )}
        <Form.Item label="Title">
          <Input
            placeholder="Title"
            value={post.Title}
            onChange={handleChange}
            name="Title"
          />
        </Form.Item>
        <Form.Item label="Text">
          <TextArea
            placeholder="Text"
            value={post.Post}
            onChange={handleChange}
            name="Post"
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" value="Submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Create;
