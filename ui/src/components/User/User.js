import React, {useEffect, useState} from 'react';
import {Typography, Table} from 'antd';

import axios from '../../services';
import CreateUser from "./CreateUser";
import userColumns from "./userColumns";

const {Title} = Typography;

function User() {
  const [users, setUsers] = useState([]);

  function refreshData() {
    axios.get('/users')
      .then(setUsers)
      .catch(() => setUsers([]))
  }

  useEffect(function () {
    refreshData();
  }, []);

  return (
    <>
      <Title level={3}>
        Users
        <span style={{float: 'right', paddingRight: '20px'}}>
          <CreateUser refreshTable={() => {
          }}/>
        </span>
      </Title>
      <Table columns={userColumns} dataSource={users}/>
    </>
  )
}

export default User;