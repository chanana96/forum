import { Outlet, Link } from 'react-router-dom';

import { Menu } from 'antd';
const { Item } = Menu;

const Layout = () => {
  return (
    <>
      <Menu mode="horizontal">
        <Item key="home">
          <Link to="/">Home</Link>
        </Item>
        <Item key="forum">
          <Link to="/forum">Forum</Link>
        </Item>
        <Item key="create">
          <Link to="/forum/create">Create</Link>
        </Item>
      </Menu>
      <Outlet />
    </>
  );
};

export default Layout;
