import prisma from "../../../prisma/index.js";

const createSponsor = async (req, res) => {
    try {
        const cre = await prisma.sponsored.create({
            data: {
                investigator: req.body.investigator,
                foreignCollab: req.body?.foreignCollab,
                projectTitle: req.body.projectTitle,
                type: req.body.type,
                agency: req.body.agency,
                fund: req.body.fund
            }
        });
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default createSponsor;