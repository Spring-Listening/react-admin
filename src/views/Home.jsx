/*
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (zoucw@yunjiglobal.com)
 * @Date: 2019-10-02 13:34:45
 * @LastEditors: 
 * @LastEditTime: 2019-10-03 17:59:28
 */

import React, { Component } from 'react';
import '@/styles/Home.scss'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Row, Col, Card, Timeline, Icon } from 'antd';
import EchartsProjects from '@/views/Dashboard/EchartsProjects'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className='container'>
        <Breadcrumbs separator=">"/>
        <div className='content'>
          <Row gutter={10}>
            <Col className="gutter-row" md={4}>
              <div className="gutter-box">
                <Card bordered={false}>
                  <div className="clear y-center">
                    <div className="pull-left mr-m">
                      <Icon type="heart" className="text-2x text-danger" />
                    </div>
                    <div className="clear">
                      <div className="text-muted">收藏</div>
                      <h2>301</h2>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="gutter-box">
                <Card bordered={false}>
                  <div className="clear y-center">
                    <div className="pull-left mr-m">
                      <Icon type="cloud" className="text-2x" />
                    </div>
                    <div className="clear">
                      <div className="text-muted">云数据</div>
                      <h2>30122</h2>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" md={4}>
              <div className="gutter-box">
                <Card bordered={false}>
                  <div className="clear y-center">
                    <div className="pull-left mr-m">
                      <Icon type="camera" className="text-2x text-info" />
                    </div>
                    <div className="clear">
                      <div className="text-muted">照片</div>
                      <h2>802</h2>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="gutter-box">
                <Card bordered={false}>
                  <div className="clear y-center">
                    <div className="pull-left mr-m">
                      <Icon type="mail" className="text-2x text-success" />
                    </div>
                    <div className="clear">
                      <div className="text-muted">邮件</div>
                      <h2>102</h2>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" md={16}>
              <div className="gutter-box">
                <Card bordered={false} className={'no-padding'}>
                  <EchartsProjects />
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
 
export default Home;