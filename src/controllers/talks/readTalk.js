import prisma from "../../../prisma/index.js";

const readTalk = async (req, res) => {
    try {
        const read = await prisma.talks.findMany();
        res.status(200).send({ data: read });
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default readTalk;