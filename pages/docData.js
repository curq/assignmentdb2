import React from 'react';
import { Table } from 'antd';
import Link from 'next/link';
import LayoutW from '../components/layout';
import prisma from '../lib/prisma'




export const getServerSideProps = async ({ params }) => {
    const test = await prisma.doctor.findMany({

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
            title: 'Degree',
            dataIndex: 'degree',
            key: 'degree',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record) => <><Link href={`/doctor/${record.email}`}>Edit</Link></>,
        },
    ];

    let data = []
    if (!test) {
        data = []
    } else {
        data = test.map((v, i) => {
            return {
                email: v.email,
                degree: v.degree,

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