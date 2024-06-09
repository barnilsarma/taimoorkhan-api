import prisma from "../../../prisma/index.js";

const updateProject = async (req, res) => {
    try {
        const upd = await prisma.projects.update(
            {
                where: {
                    id: req.params.id
                },
                data: {
                    holder: req.body?.holder,
                    title: req.body?.title,
                    year: req.body?.year,
                    venue: req.body?.venue,
                    role: req.body?.role,
                    type: req.body?.type
                }
            }
        );
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default updateProject;