import prisma from "../../lib/prisma"

const upd = async (id, description) => {
    const res = await prisma.disease_type.update({
        where: {
            id: id
        },
        data: {
            description: description,
            // id: id
        }
    })


    return res
}

const crt = async (id, description) => {
    const res = await prisma.disease_type.create({
        data: {
            id: id,
            description: description

        }
    })


    return res
}

const dlt = async (id) => {
    const res = await prisma.disease_type.delete({
        where: {
            id: id
        }
    })


    return res
}



export default async function handler(req, res) {
    if (req.method === 'POST') {
        const result = await crt(
            parseInt(req.body.id),
            req.body.description

        )
        return res.json(result)
    }

    if (req.method === 'PUT') {
        const result = await upd(
            parseInt(req.body.id),
            req.body.description
        )
        return res.json(result)
    }

    if (req.method === 'DELETE') {
        const result = await dlt(parseInt(req.body.id))
        return res.json(result)
    }

    if (req.method === 'GET') {
        const result = await prisma.disease_type.findMany({
        });


        return res.json(result)
    }
    res.status(404).end();
}