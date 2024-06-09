import prisma from "../../../prisma/index.js";

const readMemberShip = async (req, res) => {
    try {
        const read = await prisma.memberships.findMany();
        res.status(200).send({ data: read });
    }
    catch (err) {
        res.status(500).send(err);
    }
}
export default readMemberShip;