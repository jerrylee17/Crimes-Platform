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

export default function Display(props) {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const tabs = props.tabs;

  return (
    <>
      <Nav tabs>
        <Container>
          <Row>
            {tabs.map((Tab, index) => {
              return (
                <Col key={index}>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: activeTab === String(index + 1)
                      })}
                      onClick={() => toggle(String(index + 1))}
                    >
                      {Tab.title}
                    </NavLink>
                  </NavItem>
                </Col>
              );
            })
            }
          </Row>
        </Container>
      </Nav>
      <TabContent activeTab={activeTab}>
        {tabs.map((Tab, index) => {
          return (
            <TabPane tabId={String(index + 1)} key={index*index}>
              <Tab.Component />
            </TabPane>
          );
        })}
      </TabContent>
    </>
  );
}
