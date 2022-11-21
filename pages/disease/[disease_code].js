import prisma from "../../lib/prisma";
import { Button, Form, Input, Select, Space, Row } from 'antd';
import LayoutW from "../../components/layout";
import DiseaseForm from "../../components/diseaseForm";



export default function Disease({ diseases, diseaseData }) {


    return (<div className="user-fosrm-wrapper">
        <LayoutW>
            <DiseaseForm diseases={diseases} disease={diseaseData}></DiseaseForm>
        </LayoutW>

    </div>);
}

export async function getServerSideProps({ params }) {
    const diseaseData = await prisma.disease.findUnique({
        where: {
            disease_code: params.disease_code
        }
    })

    if (!diseaseData) {
        return {
            notFound: true,
        }
    }

    const diseases = await prisma.disease_type.findMany({

    });

    return {
        props: {
            diseaseData,
            diseases

        },
    };
}