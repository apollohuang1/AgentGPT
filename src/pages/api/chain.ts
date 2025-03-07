import type { NextApiRequest, NextApiResponse } from "next";
import { startGoalAgent } from "../../utils/chain";

export interface ChainAPIRequest extends NextApiRequest {
  body: {
    goal: string;
  };
}

export interface ChainAPIResponse extends NextApiResponse {
  body: { tasks: string[] };
}

export default async function handler(
  req: ChainAPIRequest,
  res: ChainAPIResponse
) {
  const completion = await startGoalAgent(req.body.goal);
  console.log(completion.text);
  res.status(200).json({ tasks: completion.text as string[] });
}
