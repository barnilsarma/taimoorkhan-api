import prisma from "../../../prisma/index.js";

const updateConf = async (req, res) => {
    try {
        const cre = await prisma.conference.update({
            where: {
                id: req.params.id
            },
            data: {
                name: req.body.name,
                link: req.body.link,
                scholars: req.body.scholars
            }
        });
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }

}
export default updateConf;