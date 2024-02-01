import { SessionData, sessionOptions } from "@/lib/session";
import { getIronSession } from "iron-session";
import { NextApiRequest, NextApiResponse } from "next";

export default async function loginHandler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const session = await getIronSession<SessionData>(req, res, sessionOptions);

	const response = await fetch("http://localhost:1337/api/auth/local", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			identifier: req.body.identifier,
			password: req.body.password,
		}),
	});

	const data = await response.json();

	session.userData = data;
	session.isLoggedIn = !data.error;
	await session.save();

	res
		.status(200)
		.json({ userData: session.userData, isLoggedIn: session.isLoggedIn });
}
