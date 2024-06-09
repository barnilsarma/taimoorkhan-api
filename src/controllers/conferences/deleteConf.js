import prisma from "../../../prisma/index.js";

const deleteConf = async (req, res) => {
    try {
        const cre = await prisma.conference.delete({
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
export default deleteConf;