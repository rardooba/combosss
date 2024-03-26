import { characters } from "../../characters";
import { NextApiResponse, NextApiRequest } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const { query, method, body } = _req;
  const { id, name, height, mass, gender } = body;

  switch (method) {
    case "GET":
      res.status(200).json(characters);
      break;
    case "POST":
      const newUser = {
        id,
        name,
        height,
        mass,
        gender,
      };
      res.status(201).json(newUser);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
