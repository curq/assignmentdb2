import prisma from "../../lib/prisma"

const upd = async (cname, disease_code, first_enc_date) => {
    const res = await prisma.discover.update({
        where: {
            cname_disease_code: { cname, disease_code }
        },
        data: {
            first_enc_date: new Date(first_enc_date)
        }
    })

    return res
}

const crt = async (cname, disease_code, first_enc_date) => {
    const res = await prisma.discover.create({
        data: {
            cname: cname,
            disease_code: disease_code,
            first_enc_date: new Date(first_enc_date)
        }
    })

    res.first_enc_date = res.first_enc_date.toString()
    return res
}

const dlt = async (cname, disease_code) => {
    const res = await prisma.discover.delete({
        where: {
            cname_disease_code: { cname, disease_code }
        }
    })

    return res
}



export default async function handler(req, res) {
    if (req.method === 'POST') {
        const result = await crt(req.body.cname, req.body.disease_code, req.body.first_enc_date)
        return res.json(result)
    }

    if (req.method === 'PUT') {
        const result = await upd(req.body.cname, req.body.disease_code, req.body.first_enc_date)
        return res.json(result)
    }

    if (req.method === 'DELETE') {
        const result = await dlt(req.body.cname, req.body.disease_code)
        return res.json(result)
    }
    res.status(404).end();
}