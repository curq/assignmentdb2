import React from 'react';
import { Table } from 'antd';
import Link from 'next/link';
import LayoutW from '../components/layout';
import prisma from '../lib/prisma'




export const getServerSideProps = async ({ params }) => {
    const test1 = await prisma.discover.findMany({

    });

    const test = test1.map((v, i) => {
        return {
            cname: v.cname,
            disease_code: v.disease_code,
            first_enc_date: v.first_enc_date.toLocaleDateString("en-UK")
        }
    })

    return {
        props: { test }
    };
};

const SpecializeData = ({ test }) => {
    //const [first, setfirst] = useState(second)
    // console.log(test)
    const columns = [
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
            title: 'Discovery Date',
            dataIndex: 'first_enc_date',
            key: 'first_enc_date',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record) => <><Link href={`/discover/${record.cname}_${record.disease_code}`}>Edit</Link></>,
        },
    ];

    let data = []
    if (!test) {
        data = []
    } else {
        data = test.map((v, i) => {
            return {
                cname: v.cname,
                disease_code: v.disease_code,
                first_enc_date: v.first_enc_date
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
export default SpecializeData;