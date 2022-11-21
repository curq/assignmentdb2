import Head from 'next/head'
import Image from 'next/image'
import LayoutW from '../components/layout'

import React from 'react';
import { Divider, List, Input } from 'antd';
import Link from 'next/link';


const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];


export default function Home() {
  return (
    <div >
      <Head>
        <title>CRUD Assignment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutW>

        <Divider orientation="left">Navigate by links below or navbar</Divider>
        <List
          size="large"
          // header={<div>Header</div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={data}

        >

          {/* Inputs with green border are primary keys and therefore are not changed after UPDATE */}
          <List.Item><span>Inputs with green border are primary keys and therefore are not changed after UPDATE</span><Input
            style={{
              border: '2px solid #C5FF9C'

            }}
          ></Input></List.Item>
          <List.Item><Link href='/dTypeData'>DiseaseType </Link></List.Item>
          <List.Item>  <Link href='/cdata' >Country </Link></List.Item>
          <List.Item><Link href='/dData' >Disease</Link></List.Item>
          <List.Item><Link href='/discoverData' >Discover</Link></List.Item>
          <List.Item><Link href='/userdata' >Users</Link></List.Item>
          <List.Item><Link href='/psData' >Public Servant</Link></List.Item>
          <List.Item><Link href='/docData' >Doctor</Link></List.Item>
          <List.Item><Link href='/sData' >Specialize</Link></List.Item>
          <List.Item> <Link href='/rData' >Record</Link></List.Item>








        </List>
      </LayoutW>
    </div>
  )
}
