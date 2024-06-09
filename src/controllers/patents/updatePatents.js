import prisma from "../../../prisma/index.js";

const updatePatents = async (req, res) => {
    try {
        const pat = await prisma.patents.update(
            {
                where: {
                    id: req.params.id
                },
                data: {
                    name: req.body.name,
                    link: req.body?.link
                }
            }
        );
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default updatePatents;