import React from 'react';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import styles from '../styles/login.module.scss';
import axios from 'axios';

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LoginPage = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    axios.post('http://localhost:4000/auth/signup', {
      ...values,
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.login} id="login">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        className={styles.form}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="userType"
          label="User Type"
          rules={[{ required: true }]}
        >
          <Select placeholder="Select User Type" allowClear>
            <Option value="QC">QC</Option>
            <Option value="CNF">CNF</Option>
            <Option value="CountryManager">CountryManager</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Email ID"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email address!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          {...tailLayout}
          name="remember"
          valuePropName="checked"
          className={styles.formWrapper}
        >
          <Checkbox className={styles.checkbox}>
            Recieve Promotional Emails
          </Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout} className={styles.formWrapper}>
          <Button type="primary" htmlType="submit" className={styles.button}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
