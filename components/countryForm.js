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
const UserForm = ({ countries, country }) => {
    const [form] = Form.useForm();

    const [method, setMethod] = useState("none")

    const onFinish = async (values) => {
        const r = await fetch('/api/country', {
            method: 'GET'
        })

        if (method == "POST") {
            const r = await fetch('/api/country', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    cname: values.country,
                    population: values.population
                })
            })
        }

        if (method == "PUT") {
            const r = await fetch('/api/country', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    cname: values.country,
                    population: values.population
                })
            })
        }

        if (method == "DELETE") {
            const r = await fetch('/api/country', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    cname: values.country
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
                    country: country.cname,
                    population: country.population
                }
            }>
            <Form.Item
                name="country"
                label="Country"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input
                    style={{
                        border: '2px solid #C5FF9C'

                    }} />
            </Form.Item>
            <Form.Item
                name="population"
                label="Population"
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
export default UserForm;