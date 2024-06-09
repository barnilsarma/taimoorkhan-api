import prisma from "../../../prisma/index.js";

const readJournal = async (req, res) => {
    try {
        const data = await prisma.journal.findMany();
        res.status(200).send({ data: data });
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default readJournal;