import { useState } from 'react';
import axios from 'axios';
import { Button, Form, Input, Modal, Alert } from 'antd';

interface Prop {
  id: string;
  setUpdatedValue: any;
}
const UpdatePost: React.FC<Prop> = ({ id, setUpdatedValue }: Prop) => {
  const [update, setUpdate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      const data = { id: id, update: update };
      setUpdatedValue(update);
      setUpdate('');
      await axios.post('http://localhost:5000/forum/updatepost/', data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUpdate(value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal} style={{ float: 'right' }}>
        Update
      </Button>
      <Modal
        title="Update"
        open={isModalOpen}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: 'none' } }}>
        {alert && (
          <Alert
            message="Field cannot be empty"
            type="error"
            closable
            onClose={() => setAlert(false)}
          />
        )}
        <Form
          onFinish={(e) => {
            if (update === '') {
              setAlert(true);
              return;
            }
            handleSubmit(e);
            setIsModalOpen(false);
          }}
          name="basic"
          style={{ maxWidth: 600 }}>
          <Form.Item>
            <Input
              type="text"
              value={update}
              onChange={handleChange}
              placeholder="update input"></Input>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" value="Submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdatePost;
