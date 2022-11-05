/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import {Modal, Space, Tag} from "antd";
import {ExclamationCircleOutlined} from "@ant-design/icons";

import axios from "../../services";

function useUserColumns(callback) {
  return [
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
            {(tags || []).map((tag) => {
              let color = 'geekblue';
              if (tag === 'em') {
                color = 'volcano';
              } else if(tag === 'qa')  {
                color = 'geekblue';
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
              axios.delete(`/users/${record.id}`)
                  .then(callback)
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
  ]
}

export default useUserColumns;