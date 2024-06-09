import prisma from "../../../prisma/index.js"

const createTitle = async (req, res) => {
    try {
        const action = await prisma.title.create({
            data: {
                desc: req.body.desc,
                DOI: req.body?.DOI,
                Journal: {
                    connect: {
                        id: req.body.journalId
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
export default createTitle;