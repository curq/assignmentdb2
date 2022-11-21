import prisma from "../../lib/prisma"

const upd = async (disease_code, pathogen, description, id) => {
    const res = await prisma.disease.update({
        where: {
            disease_code: disease_code
        },
        data: {
            // disease_code: disease_code,
            pathogen: pathogen,
            description: description,
            id: id
        }
    })


    return res
}

const crt = async (disease_code, pathogen, description, id) => {
    const res = await prisma.disease.create({
        data: {
            disease_code: disease_code,
            pathogen: pathogen,
            description: description,
            id: id
        }
    })


    return res
}

const dlt = async (disease_code) => {
    const res = await prisma.disease.delete({
        where: {
            disease_code: disease_code
        }
    })


    return res
}



export default async function handler(req, res) {
    if (req.method === 'POST') {
        const result = await crt(
            req.body.disease_code,
            req.body.pathogen,
            req.body.description,
            parseInt(req.body.id)
        )
        return res.json(result)
    }

    if (req.method === 'PUT') {
        const result = await upd(
            req.body.disease_code,
            req.body.pathogen,
            req.body.description,
            parseInt(req.body.id)
        )
        return res.json(result)
    }

    if (req.method === 'DELETE') {
        const result = await dlt(req.body.disease_code)
        return res.json(result)
    }

    if (req.method === 'GET') {
        const result = await prisma.disease.findMany({
        });


        return res.json(result)
    }
    res.status(404).end();
}