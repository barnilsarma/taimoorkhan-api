import prisma from "../../../prisma/index.js";

const updateGallery = async (req, res) => {
    try {
        const upd = await prisma.gallery.update({
            where: {
                id: req.params.id
            },
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

export default updateGallery;