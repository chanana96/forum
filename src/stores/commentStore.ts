import { action, makeAutoObservable, makeObservable, runInAction } from 'mobx';
import axios from 'axios';
interface Comment {
  Reply: string;
  PostId: string;
}
class CommentStore {
  constructor() {
    makeAutoObservable(this);
  }
  comments = [] as Comment[];

  loadComments = async (id: string) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/forum/getcomments/${id}`
      );
      this.comments = response.data.recordset;
    } catch (error) {
      console.log(error);
    }
  };

  createComment = async (reply: any, id: string) => {
    this.comments = [...this.comments, { Reply: reply, PostId: id }];
  };
}

export default new CommentStore();
