import React, { useState } from 'react';
import { Button, Form, Input, Select, Space, Row } from 'antd';
const { Option } = Select;
const layout = {
    labelCol: {
        span: 3,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 3,
        span: 16,
    },
};
const PublicSForm = ({ servants, servant }) => {
    const [form] = Form.useForm();

    const [method, setMethod] = useState("none")

    const onFinish = async (values) => {


        if (method == "POST") {
            const r = await fetch('/api/public-servant', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    email: values.email,
                    department: values.department

                })
            })
        }

        if (method == "PUT") {
            const r = await fetch('/api/public-servant', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    email: values.email,
                    department: values.department

                })
            })
        }

        if (method == "DELETE") {
            const r = await fetch('/api/public-servant', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    email: values.email
                })
            })
        }

        // const j = await r.json()
        console.log(values)
    };
    const onReset = () => {
        form.resetFields();
    };
    const onFill = () => {
        form.setFieldsValue({
            note: 'Hello world!',
            gender: 'male',
        });
    };
    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} className='user-form'
            initialValues={
                {
                    email: servant.email,
                    department: servant.department,
                }
            }>
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
                    style={{
                        border: '2px solid #C5FF9C'

                    }}
                    placeholder="Select a option and change input text above"
                    allowClear
                >

                    {servants.map((d, i) => {
                        return <Option key={i} value={d.email}>{d.email}</Option>
                    })}
                </Select>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.cname !== currentValues.cname}
            >

            </Form.Item>
            <Form.Item
                name="department"
                label="Department"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>


            <Form.Item {...tailLayout}>

                <Space>
                    <Button type="primary" htmlType="submit" onClick={() => setMethod('POST')}>
                        CREATE
                    </Button>
                    <Button type="primary" htmlType="submit" onClick={() => setMethod('PUT')} >
                        UPDATE
                    </Button>
                    <Button type="primary" htmlType="submit" onClick={() => setMethod('DELETE')}>
                        DELETE
                    </Button>
                    {/* <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button> */}
                </Space>

            </Form.Item>
        </Form>
    );

};
export default PublicSForm;