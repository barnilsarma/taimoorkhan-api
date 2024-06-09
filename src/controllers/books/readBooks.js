import prisma from "../../../prisma/index.js"

const readBooks = async (req, res) => {
    try {
        const cre = await prisma.books.findMany();
        res.status(200).send({ data: cre });
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default readBooks;