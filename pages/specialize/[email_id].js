import prisma from "../../lib/prisma";
import LayoutW from "../../components/layout";
import SpecializeForm from "../../components/specializeForm";




export default function Specialization({ specs, specData, docs }) {


    return (<div className="user-fosrm-wrapper">
        <LayoutW>
            <SpecializeForm specs={specs} spec={specData} docs={docs}></SpecializeForm>
        </LayoutW>

    </div>);
}

export async function getServerSideProps({ params }) {
    const [email, id1] = params.email_id.split(/[_]+/)
    const id = parseInt(id1)
    const specData = await prisma.specialize.findUnique({
        where: {
            id_email: { id, email }
        }
    })
    if (!specData) {
        return {
            notFound: true,
        }
    }
    // const users = await fetch("/api/users", {
    //     method: 'POST',
    // })
    const specs = await prisma.disease_type.findMany({

    });

    const docs = await prisma.doctor.findMany({

    });
    return {
        props: {
            specData,
            specs,
            docs

        },
    };
}