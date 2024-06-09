import prisma from "../../../prisma/index.js";

const updateTitle = async (req, res) => {
    try {
        const upd = await prisma.title.update(
            {
                where: {
                    id: req.params.id
                },
                data: {
                    desc: req.body.desc,
                    DOI: req.body.DOI
                }
            }
        );
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default updateTitle;