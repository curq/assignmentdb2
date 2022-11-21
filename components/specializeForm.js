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
const SpecializeForm = ({ specs, spec, docs }) => {
    const [form] = Form.useForm();

    const [method, setMethod] = useState("none")

    const onFinish = async (values) => {


        if (method == "POST") {
            const r = await fetch('/api/specialize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    email: values.email,
                    id: values.id

                })
            })
        }

        if (method == "PUT") {
            const r = await fetch('/api/specialize', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    email: values.email,
                    id: values.id

                })
            })
        }

        if (method == "DELETE") {
            const r = await fetch('/api/specialize', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    email: values.email,
                    id: values.id
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
                    email: spec.email,
                    id: spec.id,
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

                    {docs.map((d, i) => {
                        return <Option key={i} value={d.email}>{d.email}</Option>
                    })}
                </Select>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.email !== currentValues.email}
            >

            </Form.Item>
            <Form.Item
                name="id"
                label="Disease ID"
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

                    {specs.map((d, i) => {
                        return <Option key={i} value={d.id}>{d.id}</Option>
                    })}
                </Select>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.id !== currentValues.id}
            >

            </Form.Item>


            <Form.Item {...tailLayout}>

                <Space>
                    <Button type="primary" htmlType="submit" onClick={() => setMethod('POST')}>
                        CREATE
                    </Button>
                    {/* <Button type="primary" htmlType="submit" onClick={() => setMethod('PUT')} >
                        UPDATE
                    </Button> */}
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
    return <h1>FormD</h1>
};
export default SpecializeForm;