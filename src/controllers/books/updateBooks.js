import prisma from "../../../prisma/index.js"

const updateBooks = async (req, res) => {
    try {
        const cre = await prisma.books.update({
            where: {
                id: req.params.id
            },
            data: {
                writers: req.body.writers,
                name: req.body.name,
                publisher: req.body?.publisher,
                ISBN: req.body?.ISBN,
                DOR: req.body?.DOR,
                DOI: req.body?.DOI
            }
        });

        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default updateBooks;