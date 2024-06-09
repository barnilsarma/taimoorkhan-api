import prisma from "../../../prisma/index.js";

const deleteChapter = async (req, res) => {
    try {
        const delChap = await prisma.chapter.delete({
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

export default deleteChapter;