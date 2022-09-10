import React, {useState} from 'react';
import {Button, Modal, Form, Input, Select, message} from "antd";

import axios from '../../services';

const {Option} = Select;

function CreateDevice({refreshTable}) {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSubmit(values) {
    axios.post("/devices", values)
      .then(() => {
        message.success('Create successful');
        form.resetFields();
        refreshTable();
        setIsModalOpen(false);
      })
      .catch(() => {
        message.error('Create failed');
      })
  }

  return (
    <>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Create device
      </Button>
      <Modal
        title="Create device"
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
          <Form.Item label="Make" name="make">
            <Input placeholder="Input make"/>
          </Form.Item>
          <Form.Item label="Model" name="model">
            <Input placeholder="Input model"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Create</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default CreateDevice;