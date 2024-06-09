import prisma from "../../../prisma/index.js";

const readIEEE = async (req, res) => {
    try {
        const read = await prisma.iEEE.findMany();
        res.status(200).send({ data: read });
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default readIEEE;