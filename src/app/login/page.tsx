'use client'
import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";

type FieldType = {
  login?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const App: React.FC = () => (
  <div className="container mx-auto min-h-screen flex justify-center items-center bg-red-300">
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 , paddingRight: 40}}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="用户名"
      name="login"
      rules={[{ required: true, message: "请输入用户名" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="密码"
      name="password"
      rules={[{ required: true, message: "请输入密码" }]}
    >
      <Input.Password />
    </Form.Item>


    <Form.Item label={null}>
      <Button type="primary" htmlType="submit" block>
        登录
      </Button>
    </Form.Item>
  </Form>
  </div>
);

export default App;
