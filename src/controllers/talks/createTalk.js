import prisma from "../../../prisma/index.js";

const createTalk = async (req, res) => {
    try {
        const cre = await prisma.talks.create({
            data: {
                year: req.body.year,
                description: req.body.description
            }
        });
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default createTalk;