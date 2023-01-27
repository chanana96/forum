import { action, makeAutoObservable } from 'mobx';
import axios from 'axios';

interface Post {
  post: string;
  PostId: String;
}

class ForumStore {
  constructor() {
    makeAutoObservable(this);
  }
  posts = [] as Post[];

  @action loadPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/forum/get');
      this.posts = response.data.recordset;
    } catch (error) {
      console.log(error);
    }
  };

  @action deletePost = async (id: string) => {
    this.posts = this.posts.filter((e) => e.PostId !== id);
  };
}

export default new ForumStore();
