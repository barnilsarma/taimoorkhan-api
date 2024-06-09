import prisma from "../../../prisma/index.js";

const readProject = async (req, res) => {
    try {
        const read = await prisma.projects.findMany();
        res.status(200).send({ data: read });
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default readProject;