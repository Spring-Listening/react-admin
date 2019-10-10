/*
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (zoucw@yunjiglobal.com)
 * @Date: 2019-10-01 16:48:08
 * @LastEditors: 
 * @LastEditTime: 2019-10-03 16:03:50
 */
import React, { Component } from 'react';
import { Icon } from 'antd';
import '@/styles/Header.scss';

class Headers extends Component {
  render() { 
    return ( 
      <div className="header">
        <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggle}
        />
      </div>
    );
  }
}
 
export default Headers;