import { NextApiResponse, NextApiRequest } from "next";
import { characters } from "../../characters";

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const person = characters.find((c) => c.id === id);

  // User with id exists
  return person
    ? res.status(200).json(person)
    : res.status(404).json({ message: `User with id: ${id} not found.` });
}
