import React from "react";
import {Modal, Space} from "antd";
import {ExclamationCircleOutlined} from "@ant-design/icons";

export default [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Make',
    dataIndex: 'make',
    key: 'make',
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => {
      function onDelete(e) {
        e.preventDefault();
        Modal.confirm({
          title: 'Are you sure delete this device?',
          icon: <ExclamationCircleOutlined/>,
          content: `Are you sure delete ${record.name} ?`,
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            console.log('OK');
          },
        });
      }

      return (
        <Space size="middle">
          <a onClick={onDelete}>Delete</a>
        </Space>
      )
    },
  },
];