import prisma from "../../lib/prisma"

const upd = async (email, department) => {
    const res = await prisma.public_servant.update({
        where: {
            email: email
        },
        data: {
            degree: department
        }
    })

    return res
}

const crt = async (email, department) => {
    const res = await prisma.public_servant.create({
        data: {
            email: email,
            department: department
        }
    })

    return res
}

const dlt = async (email) => {
    const res = await prisma.public_servant.delete({
        where: {
            email: email
        }
    })

    return res
}



export default async function handler(req, res) {
    if (req.method === 'POST') {
        const result = await crt(req.body.email, req.body.department)
        return res.json(result)
    }

    if (req.method === 'PUT') {
        const result = await upd(req.body.email, req.body.department)
        return res.json(result)
    }

    if (req.method === 'DELETE') {
        const result = await dlt(req.body.email)
        return res.json(result)
    }
    res.status(404).end();
}