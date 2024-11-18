import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await res.revalidate("/");
    return res.json({ revaildate: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("Revaildation Failed");
  }
};

export default handler;
