import prisma from "../../../prisma/index.js";

const updateCollab = async (req, res) => {
    try {
        const upd = await prisma.collaborations.update({
            where: {
                id: req.params.id
            },
            data: {
                professor: req.body?.professor,
                affiliation: req.body?.affiliation,
                nature: req.body?.nature
            }
        });
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}
export default updateCollab;