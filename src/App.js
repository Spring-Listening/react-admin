/*
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (zoucw@yunjiglobal.com)
 * @Date: 2019-10-01 16:18:31
 * @LastEditors: 
 * @LastEditTime: 2019-10-02 14:47:47
 */
import React, { Component } from 'react';
import { Layout } from 'antd';
import ContentRouter from './routers'
import Siders from './components/Siders';
import Headers from './components/Headers';
import Footers from './components/Footers';

const { Content } = Layout;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      collapsed: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle () {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() { 
    return (  
      <div>
        <Layout>
          <Siders 
            collapsed={this.state.collapsed}
          />
          <Layout>
            <Headers 
              collapsed={this.state.collapsed}
              toggle={this.toggle}
            />
            <Content>
              <ContentRouter />
            </Content>
            <Footers />
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default App