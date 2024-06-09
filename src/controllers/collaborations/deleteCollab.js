import prisma from "../../../prisma/index.js";

const deleteCollab = async (req, res) => {
    try {
        const del = await prisma.collaborations.delete({
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
export default deleteCollab;