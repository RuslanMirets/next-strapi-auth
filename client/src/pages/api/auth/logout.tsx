import { SessionData, defaultSession, sessionOptions } from "@/lib/session";
import { getIronSession } from "iron-session";
import { NextApiRequest, NextApiResponse } from "next";

export default async function loginHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const session = await getIronSession<SessionData>(req, res, sessionOptions);

	session.destroy();

	res.status(200).json(defaultSession);
}
