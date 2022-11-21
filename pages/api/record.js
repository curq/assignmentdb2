import prisma from "../../lib/prisma"

const upd = async (email, cname, disease_code, total_deaths, total_patients) => {
    const res = await prisma.record.update({
        where: {
            email_cname_disease_code: { cname, disease_code, email }
        },
        data: {
            total_deaths: total_deaths,
            total_patients: total_patients
        }
    })

    return res
}

const crt = async (email, cname, disease_code, total_deaths, total_patients) => {
    const res = await prisma.record.create({
        data: {
            email: email,
            cname: cname,
            disease_code: disease_code,
            total_deaths: total_deaths,
            total_patients: total_patients
        }
    })


    return res
}

const dlt = async (email, cname, disease_code) => {
    const res = await prisma.record.delete({
        where: {
            email_cname_disease_code: { cname, disease_code, email }
        }
    })

    return res
}



export default async function handler(req, res) {
    if (req.method === 'POST') {
        const result = await crt(req.body.email, req.body.cname, req.body.disease_code, parseInt(req.body.total_deaths), parseInt(req.body.total_patients))
        return res.json(result)
    }

    if (req.method === 'PUT') {
        const result = await upd(req.body.email, req.body.cname, req.body.disease_code, parseInt(req.body.total_deaths), parseInt(req.body.total_patients))
        return res.json(result)
    }

    if (req.method === 'DELETE') {
        const result = await dlt(req.body.email, req.body.cname, req.body.disease_code)
        return res.json(result)
    }
    res.status(404).end();
}