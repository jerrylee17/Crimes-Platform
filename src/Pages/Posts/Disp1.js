import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from 'reactstrap';
import classnames from 'classnames';
import Stories from './Disp1/Stories';
import News from './Disp1/News';
import Misc from './Disp1/Misc';


export default function Disp1() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <Nav tabs>
        <Container>
          <Row>
            <Col>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => toggle('1')}>
                  Stories
                </NavLink>
              </NavItem>
            </Col>
            <Col>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => toggle('2')}>
                  News
                </NavLink>
              </NavItem>
            </Col>
            <Col>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '3' })}
                  onClick={() => toggle('3')}>
                  Misc
                </NavLink>
              </NavItem>
            </Col>
          </Row>
        </Container>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='1'>
          <Stories />
        </TabPane>
        <TabPane tabId='2'>
          <News />
        </TabPane>
        <TabPane tabId='3'>
          <Misc />

        </TabPane>
      </TabContent>
    </>
  );
}