import prisma from "../../../prisma/index.js";

const createMemberShip = async (req, res) => {
    try {
        const cre = await prisma.memberships.create({
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
export default createMemberShip;