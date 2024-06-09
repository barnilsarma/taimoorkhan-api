import prisma from "../../../prisma/index.js";

const createIEEE = async (req, res) => {
    try {
        const cre = await prisma.iEEE.create({
            data: {
                year: req.body.year,
                designation: req.body.designation,
                location: req.body.location
            }
        });
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default createIEEE;