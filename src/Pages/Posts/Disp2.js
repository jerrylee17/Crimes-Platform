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
import Attacks from './Disp2/Attacks';
import Hate from './Disp2/Hate';
import Vandalism from './Disp2/Vandalism';
import Misc from './Disp2/Misc';


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
                  Hate Speech
                </NavLink>
              </NavItem>
            </Col>
            <Col>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => toggle('2')}>
                  Vandalism
                </NavLink>
              </NavItem>
            </Col>
            <Col>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '3' })}
                  onClick={() => toggle('3')}>
                  Attacks
                </NavLink>
              </NavItem>
            </Col>
            <Col>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '4' })}
                  onClick={() => toggle('4')}>
                  Misc
                </NavLink>
              </NavItem>
            </Col>
          </Row>
        </Container>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='1'>
          <Hate />
        </TabPane>
        <TabPane tabId='2'>
          <Vandalism />
        </TabPane>
        <TabPane tabId='3'>
          <Attacks />
        </TabPane>
        <TabPane tabId='4'>
          <Misc />
        </TabPane>
      </TabContent>
    </>
  );
}