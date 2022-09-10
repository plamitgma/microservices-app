import React from "react";
import {Modal, Space, Tag} from "antd";
import {ExclamationCircleOutlined} from "@ant-design/icons";

export default [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, {tags}) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';

          if (tag === 'loser') {
            color = 'volcano';
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => {
      function onDelete(e) {
        e.preventDefault();
        Modal.confirm({
          title: 'Are you sure delete this user?',
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