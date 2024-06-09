import prisma from "../../../prisma/index.js";

const createGallery = async (req, res) => {
    try {
        const cre = prisma.gallery.create({
            data: {
                photo: req.body.photo
            }
        });
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export default createGallery;