import prisma from "../../../prisma/index.js";

const deleteProject = async (req, res) => {
    try {
        const upd = await prisma.projects.delete(
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default deleteProject;