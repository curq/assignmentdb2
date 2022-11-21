import React from 'react';
import { Table } from 'antd';
import Link from 'next/link';
import LayoutW from '../components/layout';
import prisma from '../lib/prisma'



// const data = [
//     {
//         key: 1,
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
//     },
//     {
//         key: 2,
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
//     },
//     {
//         key: 3,
//         name: 'Not Expandable',
//         age: 29,
//         address: 'Jiangsu No. 1 Lake Park',
//         description: 'This not expandable',
//     },
//     {
//         key: 4,
//         name: 'Joe Black',
//         age: 32,
//         address: 'Sidney No. 1 Lake Park',
//         description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
//     },
// ];

export const getServerSideProps = async ({ params }) => {
    const test = await prisma.users.findMany({

    });
    return {
        props: { test }
    };
};

const UserData = ({ test }) => {
    //const [first, setfirst] = useState(second)
    // console.log(test)
    const columns = [
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Surname',
            dataIndex: 'surname',
            key: 'surname',
        },
        {
            title: 'Salary',
            dataIndex: 'salary',
            key: 'salary',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record) => <><Link href={`/user/${record.email}`}>Edit</Link></>,
        },
    ];

    let data = []
    if (!test) {
        data = []
    } else {
        data = test.map((v, i) => {
            return {
                email: v.email,
                name: v.name,
                surname: v.surname,
                salary: v.salary,
                phone: v.phone,
                country: v.cname
            }
        })
    }


    return (
        <LayoutW>
            <Table
                columns={columns}
                // expandable={{
                //     expandedRowRender: (record) => (
                //         <p
                //             style={{
                //                 margin: 0,
                //             }}
                //         >
                //             {record.description}
                //         </p>
                //     ),
                //     rowExpandable: (record) => record.name !== 'Not Expandable',
                // }}
                dataSource={data}
            />
        </LayoutW>

    )
};
export default UserData;