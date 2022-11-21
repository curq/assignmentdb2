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
const DiseaseTypeForm = ({ types, type }) => {
    const [form] = Form.useForm();

    const [method, setMethod] = useState("none")

    const onFinish = async (values) => {
        // const r = await fetch('/api/disease-type', {
        //     method: 'GET'
        // })

        if (method == "POST") {
            const r = await fetch('/api/disease-type', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    id: values.id,
                    description: values.description

                })
            })
        }

        if (method == "PUT") {
            const r = await fetch('/api/disease-type', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    id: values.id,
                    description: values.description
                })
            })
        }

        if (method == "DELETE") {
            const r = await fetch('/api/disease-type', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
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

                    id: type.id,
                    description: type.description

                }
            }>
            <Form.Item
                name="id"
                label="TypeID"
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
export default DiseaseTypeForm;