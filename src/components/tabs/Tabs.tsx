import React from "react";
import { Tab, TabList, TabPanel, Wrapper } from "react-aria-tabpanel";
import UseForm from "../form/UseForm";
import { TabsDesign } from "./TabsStyle";

function Tabs() {
  return (
    <TabsDesign>
      <Wrapper className="wrapper">
        <div className="nav">
          <Tab id="1">General</Tab>
          <Tab id="2">Account</Tab>
          <Tab id="3">Payment</Tab>
          <Tab id="4">Shipping</Tab>
          <Tab id="5">Taxes</Tab>
          <Tab id="6">Social profiles</Tab>
          <Tab id="7">Legal</Tab>
          <Tab id="8">Password</Tab>
        </div>
        <TabList>
          <TabPanel
            tabId="1"
            tabIndex="0"
          >
            <div>General</div>
          </TabPanel>
          <TabPanel
            tabId="2"
            tabIndex="0"
          >
            <div>
              <div>Account</div>
            </div>
          </TabPanel>
          <TabPanel
            tabId="3"
            tabIndex="0"
          >
            <div className="payment">
              <div className="title">
                <h3>Pay on delivery</h3>
                <p>Add details of how you’ll charge buyers on delivery.</p>
              </div>
              <UseForm />
            </div>
          </TabPanel>
          <TabPanel
            tabId="4"
            tabIndex="0"
          >
            <div>
              <div>Shipping</div>
            </div>
          </TabPanel>
          <TabPanel
            tabId="5"
            tabIndex="0"
          >
            <div>
              <div>Taxes</div>
            </div>
          </TabPanel>
          <TabPanel
            tabId="6"
            tabIndex="0"
          >
            <div>
              <div>Social Profiles</div>
            </div>
          </TabPanel>
          <TabPanel
            tabId="7"
            tabIndex="0"
          >
            <div>
              <div>Legal</div>
            </div>
          </TabPanel>
          <TabPanel
            tabId="8"
            tabIndex="0"
          >
            <div>
              <div>Password</div>
            </div>
          </TabPanel>
        </TabList>
      </Wrapper>
    </TabsDesign>
  );
}

export default Tabs;
