import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '../asset/style/App.css';

import HomePage from '../view/component/Home/home';
import Sidebar from '../view/component/Sidebar/sidebar';
import Header from '../view/component/Header/header';

import { Layout } from 'antd';
const { Content } = Layout;







const App = () => (
  <Layout style={{ minHeight: '100vh' }}>

    <Layout className="layout">

      <Content style={{ padding: '0 50px' }}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              
              {/*<Route path="" component={NotFoundPage} />*/}
            </Switch>
          </div>
        </Router>

      </Content>

    </Layout>
  </Layout>
  
);

export default App;