import { SessionData, defaultSession, sessionOptions } from "@/lib/session";
import { getIronSession } from "iron-session";
import { NextApiRequest, NextApiResponse } from "next";

export default async function userHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const session = await getIronSession<SessionData>(req, res, sessionOptions);

	if (!session.isLoggedIn) {
		res.status(200).json(defaultSession);
	}

	res
		.status(200)
		.json({ userData: session.userData, isLoggedIn: session.isLoggedIn });
}
