import React, {useEffect, useState} from 'react';
import {Typography, Table} from 'antd';

import axios from '../../services';
import CreateUser from "./CreateUser";
import useUserColumns from "./useUserColumns";

const {Title} = Typography;

function User() {
  const [users, setUsers] = useState([]);
  const columns = useUserColumns(refreshData);

  function refreshData() {
    axios.get('/users')
      .then(res => res.data)
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
          <CreateUser refreshTable={refreshData}/>
        </span>
      </Title>
      <Table columns={columns} dataSource={users}/>
    </>
  )
}

export default User;