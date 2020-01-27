import React from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class HeaderPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Header className='header'>
        <div className="logo" >Logo</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Artist</Menu.Item>
        </Menu>
    </Header>
      
    );
  }
}

export default HeaderPage;
