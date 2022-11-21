import React from 'react';
import { Table } from 'antd';
import Link from 'next/link';
import LayoutW from '../components/layout';
import prisma from '../lib/prisma'




export const getServerSideProps = async ({ params }) => {
    const test = await prisma.disease.findMany({

    });



    return {
        props: { test }
    };
};

const ConutryData = ({ test }) => {
    //const [first, setfirst] = useState(second)
    // console.log(test)
    const columns = [
        {
            title: 'Disease Code',
            dataIndex: 'disease_code',
            key: 'disease_code',
        },
        {
            title: 'Pathogen',
            dataIndex: 'pathogen',
            key: 'pathogen',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'TypeID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record) => <><Link href={`/disease/${record.disease_code}`}>Edit</Link></>,
        },
    ];

    let data = []
    if (!test) {
        data = []
    } else {
        data = test.map((v, i) => {
            return {
                disease_code: v.disease_code,
                pathogen: v.pathogen,
                description: v.description,
                id: v.id,
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
export default ConutryData;