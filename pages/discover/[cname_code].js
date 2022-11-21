import prisma from "../../lib/prisma";
import LayoutW from "../../components/layout";
import SpecializeForm from "../../components/specializeForm";
import DiscoverForm from "../../components/discoverForm";




export default function Discover({ diseases, discoverData, countries, types }) {


    return (<div className="user-fosrm-wrapper">
        <LayoutW>
            <DiscoverForm diseases={diseases} discover={discoverData} countries={countries} types={types}></DiscoverForm>
        </LayoutW>

    </div>);
}

export async function getServerSideProps({ params }) {
    const [cname, disease_code] = params.cname_code.split(/[_]+/)

    const discoverData = await prisma.discover.findUnique({
        where: {
            cname_disease_code: { cname, disease_code }
        }
    })
    if (!discoverData) {
        return {
            notFound: true,
        }
    }

    // const discoverData = data.map((v, i) => {
    //     return {
    //         cname: v.cname,
    //         disease_code: v.disease_code,
    //         first_enc_date: v.first_enc_date.toLocaleDateString("en-UK")
    //     }
    // })
    // console.log(discoverData)
    // console.log('AAAAAAAAAAAAAAASDASDA')
    discoverData.first_enc_date = discoverData.first_enc_date.toLocaleDateString("en-UK")



    // const users = await fetch("/api/users", {
    //     method: 'POST',
    // })
    const diseases = await prisma.disease.findMany({

    });

    const countries = await prisma.country.findMany({
        select: {
            cname: true
        }
    });
    return {
        props: {
            discoverData,
            diseases,
            countries
        },
    };
}