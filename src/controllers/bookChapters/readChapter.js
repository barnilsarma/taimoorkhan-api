import prisma from "../../../prisma/index.js";

const readChapter = async (req, res) => {
    try {
        const redCh = await prisma.chapter.findMany();
        res.status(200).send({ data: redCh });
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default readChapter;