import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Forum from './routes/Forum';
import Create from './routes/Create';
import Layout from './routes/Layout';
import NoPage from './routes/NoPage';
import ViewPost from './routes/ViewPost';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="forum/">
          <Route index element={<Forum />} />
          <Route path="create" element={<Create />} />
          <Route path={`/forum/:postId`} element={<ViewPost />} />
        </Route>
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
