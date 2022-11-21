import prisma from "../../lib/prisma"

const upd = async (cname, population) => {
    const res = await prisma.country.update({
        where: {
            cname: cname
        },
        data: {
            // cname: cname,
            population: population
        }
    })

    res.population = res.population.toString()

    return res
}

const crt = async (cname, population) => {
    const res = await prisma.country.create({
        data: {
            cname: cname,
            population: population
        }
    })
    res.population = res.population.toString()

    return res
}

const dlt = async (cname) => {
    const res = await prisma.country.delete({
        where: {
            cname: cname
        }
    })
    res.population = res.population.toString()

    return res
}



export default async function handler(req, res) {
    if (req.method === 'POST') {
        const result = await crt(
            req.body.cname,
            parseInt(req.body.population)
        )
        return res.json(result)
    }

    if (req.method === 'PUT') {
        const result = await upd(
            req.body.cname,
            parseInt(req.body.population)
        )
        return res.json(result)
    }

    if (req.method === 'DELETE') {
        const result = await dlt(req.body.cname)
        return res.json(result)
    }

    if (req.method === 'GET') {
        const result = await prisma.country.findMany({
        });

        const resultFormatted = result.map((v, i) => {
            return {
                country: v.cname,
                population: v.population.toString()
            }
        })

        return res.json(resultFormatted)
    }
    res.status(404).end();
}