// import { Item } from "@react-stately/collections";
// import { useTab, useTabList, useTabPanel } from "@react-aria/tabs";
// import { useTabListState } from "@react-stately/tabs";
import React from "react";
import { Tab, TabList, TabPanel, Wrapper } from "react-aria-tabpanel";
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
            tabindex="0"
          >
            <div>General</div>
          </TabPanel>
          <TabPanel
            tabId="2"
            tabindex="0"
          >
            <div>
              <div>Account</div>
            </div>
          </TabPanel>
          <TabPanel
            tabId="3"
            tabindex="0"
          >
            <div>
              <div>Payment</div>
            </div>
          </TabPanel>
          <TabPanel
            tabId="4"
            tabindex="0"
          >
            <div>
              <div>Shipping</div>
            </div>
          </TabPanel>
          <TabPanel
            tabId="5"
            tabindex="0"
          >
            <div>
              <div>Taxes</div>
            </div>
          </TabPanel>
          <TabPanel
            tabId="6"
            tabindex="0"
          >
            <div>
              <div>Social Profiles</div>
            </div>
          </TabPanel>
          <TabPanel
            tabId="7"
            tabindex="0"
          >
            <div>
              <div>Legal</div>
            </div>
          </TabPanel>
          <TabPanel
            tabId="8"
            tabindex="0"
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
