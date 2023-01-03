import { getSession } from "next-auth/react";

 const handler = async (req, res) => {
  const session = await getSession({ req });

    if (session) {
        return res.send(session)
    }else {
        res.status(401).send("Unauthorized")
    }
}

export default handler;