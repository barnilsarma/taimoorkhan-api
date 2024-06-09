import prisma from "../../../prisma/index.js";

const deleteAward = async (req, res) => {
    try {
        const del = await prisma.awards.delete({
            where: {
                id: req.params.id
            }
        });
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default deleteAward;