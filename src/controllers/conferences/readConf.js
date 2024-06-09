import prisma from "../../../prisma/index.js";

const readConf = async (req, res) => {
    try {
        const cre = await prisma.conference.findMany({
            where: {
                id: req.params.id
            }
        });
        res.status(200).send({ data: cre });
    }
    catch (err) {
        res.status(500).send(err);
    }

}
export default readConf;