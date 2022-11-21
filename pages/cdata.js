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
    const test = await prisma.country.findMany({

    });

    const test2 = test.map((v, i) => {
        return {
            country: v.cname,
            population: v.population.toString()
        }
    })

    return {
        props: { test2 }
    };
};

const ConutryData = ({ test2 }) => {
    //const [first, setfirst] = useState(second)
    // console.log(test)
    const columns = [
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'Population',
            dataIndex: 'population',
            key: 'population',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record) => <><Link href={`/country/${record.country}`}>Edit</Link></>,
        },
    ];

    let data = []
    if (!test2) {
        data = []
    } else {
        data = test2.map((v, i) => {
            return {
                country: v.country,
                population: v.population
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