import prisma from "../../lib/prisma";
import LayoutW from "../../components/layout";
import DoctorForm from "../../components/doctorForm";
import PublicSForm from "../../components/publicSForm";




export default function User({ servants, servantData }) {


    return (<div className="user-fosrm-wrapper">
        <LayoutW>
            <PublicSForm servants={servants} servant={servantData}></PublicSForm>
        </LayoutW>

    </div>);
}

export async function getServerSideProps({ params }) {
    const servantData = await prisma.public_servant.findUnique({
        where: {
            email: params.email
        }
    })
    if (!servantData) {
        return {
            notFound: true,
        }
    }

    // const users = await fetch("/api/users", {
    //     method: 'POST',
    // })
    const servants = await prisma.users.findMany({

    });
    return {
        props: {
            servantData,
            servants

        },
    };
}