import prisma from "../../../prisma/index.js";

const updateTalk = async (req, res) => {
    try {
        const upd = await prisma.talks.update({
            where: {
                id: req.params.id
            },
            data: {
                year: req.body?.year,
                description: req.body?.description
            }
        });
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default updateTalk;