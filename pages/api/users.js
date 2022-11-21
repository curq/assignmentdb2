import prisma from "../../lib/prisma"

const upd = async (email, name, surname, salary, phone, cname) => {
    const res = await prisma.users.update({
        where: {
            email: email
        },
        data: {
            name: name,
            surname: surname,
            salary: salary,
            phone: phone,
            cname: cname
        }
    })

    return res
}

const crt = async (email, name, surname, salary, phone, cname) => {
    const res = await prisma.users.create({
        data: {
            email: email,
            name: name,
            surname: surname,
            salary: salary,
            phone: phone,
            cname: cname
        }
    })

    return res
}

const dlt = async (email) => {
    const res = await prisma.users.delete({
        where: {
            email: email
        }
    })

    return res
}



export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log('first')
        const result = await crt(
            req.body.email, req.body.name, req.body.surname,
            parseInt(req.body.salary), req.body.phone, req.body.cname
        )
        return res.json(result)
    }

    if (req.method === 'PUT') {
        const result = await upd(
            req.body.email, req.body.name, req.body.surname,
            parseInt(req.body.salary), req.body.phone, req.body.cname
        )
        return res.json(result)
    }

    if (req.method === 'DELETE') {
        const result = await dlt(req.body.email)
        return res.json(result)
    }

    if (req.method === 'GET') {
        const result = await prisma.users.findMany({
        });

        return res.json(result)
    }
    res.status(404).end();
}