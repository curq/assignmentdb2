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
const DiseaseForm = ({ diseases, disease }) => {
    const [form] = Form.useForm();

    const [method, setMethod] = useState("none")

    const onFinish = async (values) => {
        const r = await fetch('/api/disease', {
            method: 'GET'
        })

        if (method == "POST") {
            const r = await fetch('/api/disease', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    disease_code: values.disease_code,
                    pathogen: values.pathogen,
                    description: values.description,
                    id: values.id
                })
            })
        }

        if (method == "PUT") {
            const r = await fetch('/api/disease', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    disease_code: values.disease_code,
                    pathogen: values.pathogen,
                    description: values.description,
                    id: values.id
                })
            })
        }

        if (method == "DELETE") {
            const r = await fetch('/api/disease', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    disease_code: values.disease_code

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
                    disease_code: disease.disease_code,
                    pathogen: disease.pathogen,
                    description: disease.description,
                    id: disease.id
                }
            }>
            <Form.Item
                name="disease_code"
                label="Disease Code"
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
                name="pathogen"
                label="Pathogen"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input
                />
            </Form.Item>
            <Form.Item
                name="description"
                label="Description"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="id"
                label="TypeID"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
                    placeholder="Select a option and change input text above"
                    allowClear
                >

                    {diseases.map((v, i) => {
                        return <Option key={i} value={v.id}>{v.id}</Option>
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
export default DiseaseForm;