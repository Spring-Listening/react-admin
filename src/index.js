/*
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (zoucw@yunjiglobal.com)
 * @Date: 2019-09-22 08:15:00
 * @LastEditors: 
 * @LastEditTime: 2019-10-03 16:02:49
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import 'antd/dist/antd.css';
import '@/styles/index.scss'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));

