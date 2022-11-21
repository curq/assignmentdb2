import React, { useState } from 'react';
import { Button, Form, Input, Select, Space, Row, DatePicker } from 'antd';
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

const config = {
    rules: [
        {
            type: 'object',
            required: true,
            message: 'Please select time!',
        },
    ],
}
const DiscoverForm = ({ diseases, discover, countries }) => {
    const [form] = Form.useForm();

    const [method, setMethod] = useState("none")

    const onFinish = async (values) => {
        // const d = Date.parse(values.first_enc_date.toString())
        // console.log(d)
        // return

        if (method == "POST") {
            const r = await fetch('/api/discover', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    cname: values.cname,
                    disease_code: values.disease_code,
                    first_enc_date: values.first_enc_date.toString()

                })
            })
        }

        if (method == "PUT") {
            const r = await fetch('/api/discover', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    cname: values.cname,
                    disease_code: values.disease_code,
                    first_enc_date: values.first_enc_date.toString()

                })
            })
        }

        if (method == "DELETE") {
            const r = await fetch('/api/discover', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    cname: values.cname,
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
                    cname: discover.cname,
                    disease_code: discover.disease_code,
                    //         first_enc_date: discover.first_enc_date
                }
            }>
            <Form.Item
                name="cname"
                label="Country"
                rules={[
                    {
                        required: true,
                    },
                ]}

            >
                <Select style={{
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
                shouldUpdate={(prevValues, currentValues) => prevValues.email !== currentValues.email}
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

                    {diseases.map((d, i) => {
                        return <Option key={i} value={d.disease_code}>{d.disease_code}</Option>
                    })}
                </Select>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.id !== currentValues.id}
            >

            </Form.Item>
            <Form.Item label="Discovery Date" name="first_enc_date" {...config}>
                <DatePicker />
            </Form.Item>

            {/* <DatePicker onChange={onChange} /> */}


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
export default DiscoverForm;