import prisma from "../../../prisma/index.js";

const readTitle = async (req, res) => {
    try {
        const data = await prisma.title.findMany(
            {
                where: {
                    journalId: req.params.id
                }
            }
        );
        res.status(200).send({ data: data });
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default readTitle;