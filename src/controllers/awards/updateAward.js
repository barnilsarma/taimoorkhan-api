import prisma from "../../../prisma/index.js";

const updateAward = async (req, res) => {
    try {
        const upd = await prisma.awards.update({
            where: {
                id: req.params.id
            },
            data: {
                name: req.body?.name,
                year: req.body?.year,
                organisation: req.body?.organisation
            }
        });
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default updateAward;