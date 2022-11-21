import React from 'react';
import { Table } from 'antd';
import Link from 'next/link';
import LayoutW from '../components/layout';
import prisma from '../lib/prisma'




export const getServerSideProps = async ({ params }) => {
    const test = await prisma.record.findMany({

    });

    // const test = test1.map((v, i) => {
    //     return {
    //         cname: v.cname,
    //         email: v.email,
    //         disease_code: v.disease_code,
    //         total_deaths: v.total_deaths,
    //         total_patients: v.total_patients
    //     }
    // })

    return {
        props: { test }
    };
};

const RecordData = ({ test }) => {
    //const [first, setfirst] = useState(second)
    // console.log(test)
    const columns = [
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Country',
            dataIndex: 'cname',
            key: 'cname',
        },

        {
            title: 'Disease Code',
            dataIndex: 'disease_code',
            key: 'disease_code',
        },
        {
            title: 'Total Deaths',
            dataIndex: 'total_deaths',
            key: 'total_deaths',
        },
        {
            title: 'Total Patients',
            dataIndex: 'total_patients',
            key: 'total_patients',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record) => <><Link href={`/record/${record.cname}_${record.disease_code}_${record.email}`}>Edit</Link></>,
        },
    ];

    let data = []
    if (!test) {
        data = []
    } else {
        data = test.map((v, i) => {
            return {
                cname: v.cname,
                email: v.email,
                disease_code: v.disease_code,
                total_deaths: v.total_deaths,
                total_patients: v.total_patients
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
export default RecordData;