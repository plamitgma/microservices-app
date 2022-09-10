import React, {useEffect, useState} from 'react';
import {Typography, Table} from 'antd';

import axios from '../../services';
import CreateDevice from "./CreateDevice";
import deviceColumns from "./deviceColumns";

const {Title} = Typography;

function Device() {
  const [devices, setDevices] = useState([]);

  function refreshData() {
    axios.get('/devices')
      .then(setDevices)
      .catch(() => setDevices([]))
  }

  useEffect(function () {
    refreshData();
  }, []);

  return (
    <>
      <Title level={3}>
        Devices
        <span style={{float: 'right', paddingRight: '20px'}}>
          <CreateDevice refreshTable={() => {
          }}/>
        </span>
      </Title>
      <Table columns={deviceColumns} dataSource={devices}/>
    </>
  )
}

export default Device;