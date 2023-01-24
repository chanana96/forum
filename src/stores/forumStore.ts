import { action, makeAutoObservable } from 'mobx';
import axios from 'axios';

interface Post {
  post: string;
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
      console.log('posts: ' + this.posts);
    } catch (error) {
      console.log(error);
    }
  };
}

export default new ForumStore();
