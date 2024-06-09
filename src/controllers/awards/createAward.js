import prisma from "../../../prisma/index.js";

const createAward = async (req, res) => {
    try {
        const cre = await prisma.awards.create({
            data: {
                name: req.body.name,
                year: req.body.year,
                organisation: req.body.organisation
            }
        });
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default createAward;