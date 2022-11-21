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
const RecordForm = ({ servantsEmails, rec, countries, codes }) => {
    const [form] = Form.useForm();

    const [method, setMethod] = useState("none")

    const onFinish = async (values) => {


        if (method == "POST") {
            const r = await fetch('/api/record', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    email: values.email,
                    cname: values.cname,
                    disease_code: values.disease_code,
                    total_deaths: values.total_deaths,
                    total_patients: values.total_patients
                })
            })
        }

        if (method == "PUT") {
            const r = await fetch('/api/record', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    email: values.email,
                    cname: values.cname,
                    disease_code: values.disease_code,
                    total_deaths: values.total_deaths,
                    total_patients: values.total_patients

                })
            })
        }

        if (method == "DELETE") {
            const r = await fetch('/api/record', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    email: values.email,
                    cname: values.cname,
                    disease_code: values.disease_code,
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
                    email: rec.email,
                    cname: rec.cname,
                    disease_code: rec.disease_code,
                    total_deaths: rec.total_deaths,
                    total_patients: rec.total_patients
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

                    {servantsEmails.map((d, i) => {
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
                name="cname"
                label="Country"
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

                    {countries.map((d, i) => {
                        return <Option key={i} value={d.cname}>{d.cname}</Option>
                    })}
                </Select>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.id !== currentValues.id}
            >

            </Form.Item>
            <Form.Item
                name="disease_code"
                label="Disease Code"
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

                    {codes.map((d, i) => {
                        return <Option key={i} value={d.disease_code}>{d.disease_code}</Option>
                    })}
                </Select>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.id !== currentValues.id}
            >

            </Form.Item>
            <Form.Item
                name="total_deaths"
                label="Total Deaths"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="total_patients"
                label="Total Patients"
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
    return <h1>FormD</h1>
};
export default RecordForm;