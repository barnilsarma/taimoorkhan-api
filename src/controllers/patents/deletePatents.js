import prisma from "../../../prisma/index.js";

const deletePatents = async (req, res) => {
    try {
        const pat = await prisma.patents.delete(
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default deletePatents;