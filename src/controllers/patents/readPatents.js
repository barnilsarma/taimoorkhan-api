import prisma from "../../../prisma/index.js";

const readPatents = async (req, res) => {
    try {
        const pat = await prisma.patents.findMany();
        res.status(200).send({ data: pat });
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default readPatents;