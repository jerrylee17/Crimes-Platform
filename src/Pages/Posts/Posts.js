import React, { useState } from 'react';
<<<<<<< HEAD
import { Button } from 'reactstrap';
import Display from '../../Components/PostsDisplay/Display';
import Attacks from './Disp2/Attacks';
import Hate from './Disp2/Hate';
import Vandalism from './Disp2/Vandalism';
import Stories from './Disp1/Stories.js';
import News from './Disp1/News.js';
import Misc from './Disp1/Misc.js';
=======
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

>>>>>>> tabs and page styling for posts compkete

export default function Posts() {
  const [disp, toggleDisp] = useState(true);
  const Disp1 = {
    tabs: [{
      title: 'Stories',
      Component: Stories
    },
    {
      title: 'News',
      Component: News
    },
    {
      title: 'Misc',
      Component: Misc
    },
    ]
  };
  const Disp2 = {
    tabs: [{
      title: 'Hate Speech',
      Component: Hate
    },
    {
      title: 'Vandalism',
      Component: Vandalism
    },
    {
      title: 'Attacks',
      Component: Attacks
    },
    {
      title: 'Misc',
      Component: Misc
    }
    ]
  };

  return (
<<<<<<< HEAD
    <div>
      <Button onClick={() => toggleDisp(!disp)} > Click to toggle displays </Button>
      {disp ? (
        <Display {...Disp1} />
      ) : (
        <Display {...Disp2} />
      )}
    </div>
=======
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
>>>>>>> tabs and page styling for posts compkete
  );
}
