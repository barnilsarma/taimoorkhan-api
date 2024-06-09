import prisma from "../../../prisma/index.js";

const updateEditorial = async (req, res) => {
    try {
        const upd = await prisma.editorial.update({
            where: {
                id: req.params.id
            },
            data: {
                name: req.body.name
            }
        });
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default updateEditorial;