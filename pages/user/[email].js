import UserForm from "../../components/userForm";
import prisma from "../../lib/prisma";
import { Button, Form, Input, Select, Space, Row } from 'antd';
import LayoutW from "../../components/layout";



// export async function getStaticPaths() {
//     const getUsersEmail = async () => {
//         const test = await prisma.users.findMany({
//             //where: { published: true },
//             // include: {
//             //   users: {
//             //     select: { name: true },
//             //   },
//             // },
//         });
//         return test.map((v) => {
//             return {
//                 params: {
//                     email: v.email.replace(/\.$/, ''),
//                 },
//             };
//         });
//     }

//     const paths = await getUsersEmail();
//     return {
//         paths,
//         fallback: false,
//     };
// }

export default function User({ userData, countries }) {


    return (<div className="user-fosrm-wrapper">
        <LayoutW>
            <UserForm countries={countries} user={userData}></UserForm>
        </LayoutW>

    </div>);
}

export async function getServerSideProps({ params }) {
    const userData = await prisma.users.findUnique({
        where: {
            email: params.email
        }
    })

    // const users = await fetch("/api/users", {
    //     method: 'POST',
    // })
    const countries = await prisma.country.findMany({
        select: {
            cname: true
        }
    });
    return {
        props: {
            userData,
            countries

        },
    };
}