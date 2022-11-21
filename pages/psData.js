import React from 'react';
import { Table } from 'antd';
import Link from 'next/link';
import LayoutW from '../components/layout';
import prisma from '../lib/prisma'



export const getServerSideProps = async ({ params }) => {
    const test = await prisma.public_servant.findMany({

    });



    return {
        props: { test }
    };
};

const DoctorData = ({ test }) => {
    //const [first, setfirst] = useState(second)
    // console.log(test)
    const columns = [
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record) => <><Link href={`/public-servant/${record.email}`}>Edit</Link></>,
        },
    ];

    let data = []
    if (!test) {
        data = []
    } else {
        data = test.map((v, i) => {
            return {
                email: v.email,
                department: v.department,

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
export default DoctorData;