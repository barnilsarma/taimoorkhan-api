import prisma from "../../../prisma/index.js";

const updateIEEE = async (req, res) => {
    try {
        const upd = await prisma.iEEE.update({
            where: {
                id: req.params.id
            },
            data: {
                year: req.body?.year,
                designation: req.body?.designation,
                location: req.body?.location
            }
        });
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default updateIEEE;