import prisma from "../../lib/prisma";
import LayoutW from "../../components/layout";
import DiseaseTypeForm from "../../components/diseaseTypeForm";



export default function Disease({ types, typeData }) {


    return (<div className="user-fosrm-wrapper">
        <LayoutW>
            <DiseaseTypeForm types={types} type={typeData}></DiseaseTypeForm>
        </LayoutW>

    </div>);
}

export async function getServerSideProps({ params }) {

    const typeData = await prisma.disease_type.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if (!typeData) {
        return {
            notFound: true,
        }
    }

    const types = await prisma.disease_type.findMany({

    });

    return {
        props: {
            typeData,
            types

        },
    };
}