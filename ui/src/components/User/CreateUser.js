import React, {useState} from 'react';
import {Button, Modal, Form, Input, Select, message} from "antd";
import axios from "../../services";

const {Option} = Select;

function CreateUser({refreshTable}) {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSubmit(values) {
    axios.post("/users", values)
      .then(() => {
        message.success('Create successful');
        form.resetFields();
        refreshTable();
      })
      .catch(() => {
        message.error('Create failed');
      })
  }

  return (
    <>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Create user
      </Button>
      <Modal
        title="Create user"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form
          layout={"vertical"}
          form={form}
          onFinish={handleSubmit}
        >
          <Form.Item label="Name" name="name" rules={[{required: true}]}>
            <Input placeholder="Input name"/>
          </Form.Item>
          <Form.Item label="Address" name="address">
            <Input placeholder="Input address"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Create</Button>
          </Form.Item>
          <Form.Item name="tag" label="Tags" rules={[{required: true}]}>
            <Select
              placeholder="Select a tags"
              allowClear
              mode="multiple"
            >
              <Option value="dev">DEV</Option>
              <Option value="qa">QA</Option>
              <Option value="em">EM</Option>
            </Select>
          </Form.Item>
        </Form>

      </Modal>
    </>
  )
}

export default CreateUser;