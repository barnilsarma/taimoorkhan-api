import prisma from "../../../prisma/index.js";

const createConf = async (req, res) => {
    try {
        const cre = await prisma.conference.create({
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
export default createConf;