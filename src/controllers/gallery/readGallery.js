import prisma from "../../../prisma/index.js";

const readGallery = async (req, res) => {
    try {
        const read = prisma.gallery.findMany();
        res.status(200).send({ data: read });
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default readGallery;