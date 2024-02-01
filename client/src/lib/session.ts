import type { SessionOptions } from "iron-session";

export interface IUser {
	jwt: string;
	user: {
		id: number;
		email: string;
		username: string;
	};
}

export interface SessionData {
	userData: IUser | null;
	isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
	userData: null,
	isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
	password: "complex_password_at_least_32_characters_long",
	cookieName: "iron-session",
	cookieOptions: {
		secure: process.env.NODE_ENV === "production",
		// httpOnly: false,
	},
};
