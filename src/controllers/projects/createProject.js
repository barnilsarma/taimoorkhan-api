import prisma from "../../../prisma/index.js";

const createProject = async (req, res) => {
    try {
        const cre = await prisma.projects.create(
            {
                data: {
                    holder: req.body.holder,
                    title: req.body.title,
                    year: req.body.year,
                    venue: req.body.venue,
                    role: req.body?.role,
                    type: req.body.type
                }
            }
        );
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default createProject;