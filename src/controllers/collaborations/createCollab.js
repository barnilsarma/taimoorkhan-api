import prisma from "../../../prisma/index.js";

const createCollab = async (req, res) => {
    try {
        const cre = await prisma.collaborations.create({
            data: {
                professor: req.body.professor,
                affiliation: req.body.affiliation,
                nature: req.body.nature
            }
        });
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}
export default createCollab;