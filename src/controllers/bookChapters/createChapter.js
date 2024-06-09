import prisma from "../../../prisma/index.js";

const createChapter = async (req, res) => {
    try {
        const bookchapter = await prisma.chapter.create({
            data: {
                name: req.body.name,
                Books: {
                    connect: {
                        id: req.body.booksId
                    }
                }
            }
        });
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default createChapter;