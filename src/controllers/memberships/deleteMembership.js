import prisma from "../../../prisma/index.js";

const deleteMemberShip = async (req, res) => {
    try {
        const del = await prisma.memberships.del({
            where: {
                id: req.params.id
            }
        });
        res.status(200).send("Done");
    }
    catch (err) {
        res.status(500).send(err);
    }
}
export default deleteMemberShip;