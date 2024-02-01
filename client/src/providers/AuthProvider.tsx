import { IUser, SessionData, defaultSession } from "@/lib/session";
import { PropsWithChildren, useEffect, useState } from "react";
import { createContext, useContext } from "react";

export const AuthContext = createContext<{
	userSession: SessionData;
	setSession: (session: SessionData) => void;
	isLoading: boolean;
}>({
	userSession: defaultSession,
	isLoading: false,
	setSession: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }: PropsWithChildren) => {
	const [userSession, setUserSession] = useState<SessionData>(defaultSession);
	const [isLoading, setIsLoading] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const fetchLoggedInUser = async () => {
		setIsLoading(true);
		try {
			const response = await fetch("/api/auth/user");
			const data = await response.json();

			setUserSession(data);

			if (data.isLoggedIn) {
				setIsAuthenticated(true);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleUser = (user: SessionData) => {
		setUserSession(user);
	};

	useEffect(() => {
		fetchLoggedInUser();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				userSession,
				setSession: handleUser,
				isLoading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
