import prisma from "../../../prisma/index.js";

const updateMemberShip = async (req, res) => {
    try {
        const upd = await prisma.memberships.update({
            where: {
                id: req.params.id
            },
            data: {
                name: req.body.name
            }
        });
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}
export default updateMemberShip;