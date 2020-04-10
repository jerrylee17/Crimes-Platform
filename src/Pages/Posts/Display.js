import React, { useState, useEffect } from 'react';
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
  
  useEffect(() => {
    setActiveTab('1');
  }, [tabs]);

  return (
    <>
      <Nav tabs>
        <Container>
          <Row>
            {tabs.map((Tab, index) => {
              return (
                <Col>
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
            <TabPane tabId={String(index + 1)}>
              <Tab.Component {...{name: Tab.title}}/>
            </TabPane>
          );
        })}
      </TabContent>
    </>
  );
}
