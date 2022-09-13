import React, {useEffect, useState} from 'react';
import {Typography, Table} from 'antd';

import axios from '../../services';
import CreateDevice from "./CreateDevice";
import useDeviceColumns from "./useDeviceColumns";

const {Title} = Typography;

function Device() {
  const [devices, setDevices] = useState([]);
  const columns = useDeviceColumns(refreshData);

  function refreshData() {
    axios.get('/devices')
      .then(res => res.data)
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
          <CreateDevice refreshTable={refreshData}/>
        </span>
      </Title>
      <Table columns={columns} dataSource={devices}/>
    </>
  )
}

export default Device;