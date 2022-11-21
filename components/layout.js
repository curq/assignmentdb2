import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import Link from 'next/link';
const { Header, Content, Footer } = Layout;
const LayoutW = ({ children }) => {
    const items1 = ['1', '2', '3'].map((key) => ({
        key,
        label: `nav ${key}`,
    }));

    return (
        <Layout className="layout"
            style={{
                // textAlign: 'center',
                marginTop: 'auto',
                minHeight: '98vh'
            }}
        >
            <Header className="header"
                style={{
                    // textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'flex-start'

                }}
            >
                <Link href='/' className='navlink'>HOME |</Link>
                <Link href='/dTypeData' className='navlink'>DiseaseType |</Link>
                <Link href='/cdata' className='navlink'>Country |</Link>
                <Link href='/dData' className='navlink'>Disease |</Link>
                <Link href='/discoverData' className='navlink'>Discover |</Link>
                <Link href='/userdata' className='navlink'>Users |</Link>
                <Link href='/psData' className='navlink'>P_Servant |</Link>
                <Link href='/docData' className='navlink'>Doctor |</Link>
                <Link href='/sData' className='navlink'>Specialize |</Link>
                <Link href='/rData' className='navlink'>Record</Link>
            </Header>
            <Content
                style={{
                    marginTop: "2rem",
                    padding: '0 50px',
                }}
            >

                <div className="site-layout-content">{children}</div>

            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                    marginTop: 'auto'
                }}
            >
                Create by Sirazh Gabdullin
            </Footer>
        </Layout>
    )
};
export default LayoutW;