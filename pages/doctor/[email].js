import UserForm from "../../components/userForm";
import prisma from "../../lib/prisma";
import LayoutW from "../../components/layout";
import DoctorForm from "../../components/doctorForm";




export default function User({ doctors, doctorData }) {


    return (<div className="user-fosrm-wrapper">
        <LayoutW>
            <DoctorForm doctors={doctors} doctor={doctorData}></DoctorForm>
        </LayoutW>

    </div>);
}

export async function getServerSideProps({ params }) {
    const doctorData = await prisma.doctor.findUnique({
        where: {
            email: params.email
        }
    })

    if (!doctorData) {
        return {
            notFound: true,
        }
    }

    // const users = await fetch("/api/users", {
    //     method: 'POST',
    // })
    const doctors = await prisma.users.findMany({

    });
    return {
        props: {
            doctorData,
            doctors

        },
    };
}