import prisma from "../../../prisma/index.js";

const updateJournal = async (req, res) => {
    try {
        const upd = await prisma.journal.update(
            {
                where: {
                    id: req.params.id
                },
                data: {
                    year: req.body.year
                }
            }
        );
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default updateJournal;