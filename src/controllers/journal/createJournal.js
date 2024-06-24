import prisma from "../../../prisma/index.js"

const createJournal = async (req, res) => {
    try {
        const data = await prisma.journal.create({
            data: {
                year: req.body.year
                
            }
        });
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}
export default createJournal;