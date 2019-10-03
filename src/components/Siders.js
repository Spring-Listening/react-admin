/*
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (zoucw@yunjiglobal.com)
 * @Date: 2019-10-01 16:39:41
 * @LastEditors: 
 * @LastEditTime: 2019-10-03 11:04:54
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'

import '../styles/Sider.css'
const { Sider } = Layout;


class Siders extends Component {
  constructor(props) {
    super(props);
    this.state = {  
    }
  }
  
  render() { 
    return ( 
        <Sider
          trigger={null}
          collapsible
          collapsed={this.props.collapsed}
          style={{ height: document.documentElement.clientHeight + 'px' }}
        >
          <div className="logo">
            logo
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
            <Link to='/'>
              <Icon type="user" />
              <span>首页</span>
            </Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to='/about'>
              <Icon type="video-camera" />
              <span>UI</span>
            </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>动画</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="upload" />
              <span>表格</span>
            </Menu.Item>
          </Menu>
        </Sider>
      
    );
  }
}
 
export default Siders;