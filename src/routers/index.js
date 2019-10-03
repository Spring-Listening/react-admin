/*
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (zoucw@yunjiglobal.com)
 * @Date: 2019-10-02 13:33:56
 * @LastEditors: 
 * @LastEditTime: 2019-10-02 14:47:58
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../views/Home'
import About from '../views/About'

const BasicRoute = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
);

export default BasicRoute;