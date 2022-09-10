import React from 'react';
import {Tabs} from "antd";

import User from "./User/User";
import Device from './Device/Device';

export const TABS = {
  users: 'users',
  devices: 'devices',
}

function Menu() {
  return (
    <Tabs defaultActiveKey={TABS.users} centered>
      <Tabs.TabPane tab="Users" key={TABS.users}>
        <User/>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Devices" key={TABS.devices}>
        <Device />
      </Tabs.TabPane>
    </Tabs>
  )
}

export default Menu;