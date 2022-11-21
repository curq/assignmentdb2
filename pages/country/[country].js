import CountryForm from "../../components/countryForm";
import prisma from "../../lib/prisma";
import { Button, Form, Input, Select, Space, Row } from 'antd';
import LayoutW from "../../components/layout";



// export async function getStaticPaths() {
//     const getCountries = async () => {
//         const test = await prisma.country.findMany({
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
//                     country: v.cname.replace(/\.$/, ''),
//                 },
//             };
//         });
//     }

//     const paths = await getCountries();
//     return {
//         paths,
//         fallback: false,
//     };
// }

export default function Country({ countryData, countries }) {


    return (<div className="user-fosrm-wrapper">
        <LayoutW>
            <CountryForm countries={countries} country={countryData}></CountryForm>
        </LayoutW>

    </div>);
}

export async function getServerSideProps({ params }) {
    const countryData = await prisma.country.findUnique({
        where: {
            cname: params.country
        }
    })

    if (!countryData) {
        return {
            notFound: true,
        }
    }

    countryData.population = countryData.population.toString()

    // const users = await fetch("/api/users", {
    //     method: 'POST',
    // })
    const countriesRes = await prisma.country.findMany({

    });
    const countries = countriesRes.map((v, i) => {
        return {
            country: v.cname,
            population: v.population.toString()
        }
    })

    return {
        props: {
            countryData,
            countries

        },
    };
}