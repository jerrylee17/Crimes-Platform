import React, { useState } from 'react';
<<<<<<< HEAD
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
=======
import { Button } from 'reactstrap';
import Disp1 from './Disp1';
import Disp2 from './Disp2';
>>>>>>> 36aa7fb781287e08f50d98d125a69c273993ce53

export default function Posts() {
  const [disp, toggleDisp] = useState(true);
  return (
<<<<<<< HEAD
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
=======
    <div>
      <Button onClick={() => toggleDisp(!disp)} > Click to toggle displays </Button>
      {disp ? (
        <Disp1 />
      ) : (
        <Disp2 />
      )}
    </div>
>>>>>>> 36aa7fb781287e08f50d98d125a69c273993ce53
  );
}