import prisma from "../../lib/prisma";
import LayoutW from "../../components/layout";
import RecordForm from "../../components/recordForm";




export default function Specialization({ servantsEmails, recData, countries, disease_codes }) {


    return (<div className="user-fosrm-wrapper">
        <LayoutW>
            <RecordForm servantsEmails={servantsEmails} rec={recData} countries={countries} codes={disease_codes}></RecordForm>
        </LayoutW>

    </div>);
}

export async function getServerSideProps({ params }) {
    const [cname, disease_code, email] = params.cname_dcode_email.split(/[_]+/)
    //  const id = parseInt(id1)
    const recData = await prisma.record.findUnique({
        where: {
            email_cname_disease_code: { cname, disease_code, email }
        }
    })

    if (!recData) {
        return {
            notFound: true,
        }
    }

    // const users = await fetch("/api/users", {
    //     method: 'POST',
    // })
    const servantsEmails = await prisma.public_servant.findMany({
        select: {
            email: true
        }
    });

    const countries = await prisma.country.findMany({
        select: {
            cname: true
        }
    });

    const disease_codes = await prisma.disease.findMany({
        select: {
            disease_code: true
        }
    });
    return {
        props: {
            recData,
            servantsEmails,
            countries,
            disease_codes

        },
    };
}