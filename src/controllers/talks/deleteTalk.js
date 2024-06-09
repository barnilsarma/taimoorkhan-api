import prisma from "../../../prisma/index.js";

const deleteTalk = async (req, res) => {
    try {
        const del = await prisma.talks.delete({
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

export default deleteTalk;