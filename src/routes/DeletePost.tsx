import forumStore from '../stores/forumStore';
import axios from 'axios';
import { Button } from 'antd';

interface Prop {
  id: string;
}

const DeletePost: React.FC<Prop> = ({ id }: Prop) => {
  const deletePost = async () => {
    try {
      forumStore.deletePost(id);
      const response = await axios.delete(
        `http://localhost:5000/forum/delete/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button type="primary" danger onClick={deletePost}>
        Delete
      </Button>
    </div>
  );
};

export default DeletePost;
