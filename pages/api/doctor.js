import prisma from "../../lib/prisma"

const upd = async (email, degree) => {
    const res = await prisma.doctor.update({
        where: {
            email: email
        },
        data: {
            degree: degree
        }
    })

    return res
}

const crt = async (email, degree) => {
    const res = await prisma.doctor.create({
        data: {
            email: email,
            degree: degree
        }
    })

    return res
}

const dlt = async (email) => {
    const res = await prisma.doctor.delete({
        where: {
            email: email
        }
    })

    return res
}



export default async function handler(req, res) {
    if (req.method === 'POST') {
        const result = await crt(req.body.email, req.body.degree)
        return res.json(result)
    }

    if (req.method === 'PUT') {
        const result = await upd(req.body.email, req.body.degree)
        return res.json(result)
    }

    if (req.method === 'DELETE') {
        const result = await dlt(req.body.email)
        return res.json(result)
    }
    res.status(404).end();
}