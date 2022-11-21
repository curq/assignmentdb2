import prisma from "../../lib/prisma"

// const upd = async (email, id) => {
//     const res = await prisma.specialize.update({
//         where: {
//             id_email: { id, email }
//         },
//         data: {
//             email: email,
//             id: id
//         }
//     })

//     return res
// }

const crt = async (email, id) => {
    const res = await prisma.specialize.create({
        data: {
            email: email,
            id: id
        }
    })

    return res
}

const dlt = async (email, id) => {
    const res = await prisma.specialize.delete({
        where: {
            id_email: { id, email }
        }
    })

    return res
}



export default async function handler(req, res) {
    if (req.method === 'POST') {
        const result = await crt(req.body.email, parseInt(req.body.id))
        return res.json(result)
    }

    if (req.method === 'PUT') {
        const result = await upd(req.body.email, parseInt(req.body.id))
        return res.json(result)
    }

    if (req.method === 'DELETE') {
        const result = await dlt(req.body.email, parseInt(req.body.id))
        return res.json(result)
    }
    res.status(404).end();
}