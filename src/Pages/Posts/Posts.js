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
import Tab1 from './Tab1';
import Tab from '../../Components/UIComponents/Tab';
import './Posts.css';


/**
 * @param {json} props contains all of the information in a post
 * @returns layout of tabs
 */
export default function Post() {
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
              <NavItem className="tabStyle">
                <NavLink
                  className={classnames('Story', { active: activeTab === '1' })}
                  onClick={() => toggle('1')}>
                  STORIES
                </NavLink>
              </NavItem>
            </Col>
            <Col>
              <NavItem className="tabStyle">
                <NavLink
                  className={classnames('Story', { active: activeTab === '2' })}
                  onClick={() => toggle('2')}>
                  NEWS
                </NavLink>
              </NavItem>
            </Col>
            <Col>
              <NavItem className="tabStyle">
                <NavLink
                  className={classnames('Story', { active: activeTab === '3' })}
                  onClick={() => toggle('3')}>
                  MISC
                </NavLink>
              </NavItem>
            </Col>
          </Row>
        </Container>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='1'>
          <Tab1 />
        </TabPane>
        <TabPane tabId='2'>
          <h4>Render tab 2 here</h4>
        </TabPane>
        <TabPane tabId='3'>
          <h4>Render tab 3 here</h4>

        </TabPane>
      </TabContent>
    </>
  );
}