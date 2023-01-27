import { useState } from 'react';
import commentStore from '../stores/commentStore';
import axios from 'axios';
import { Button, Form, Input } from 'antd';

interface Prop {
  id: string;
  setAlert: any;
}
const CreateComment: React.FC<Prop> = ({ id, setAlert }: Prop) => {
  const [reply, setReply] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      commentStore.createComment(reply, id);
      const data = { id: id, reply: reply };
      setReply('');
      await axios.post('http://localhost:5000/forum/postcomment/', data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setReply(value);
  };

  return (
    <div>
      <Form
        onFinish={(e) => {
          if (reply === '') {
            setAlert(true);
            return;
          }
          handleSubmit(e);
        }}
        name="basic"
        style={{ maxWidth: 600 }}>
        <Form.Item label="Add a comment">
          <Input
            type="text"
            value={reply}
            onChange={handleChange}
            placeholder="comment"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            value="Submit"
            style={{ float: 'right' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateComment;
