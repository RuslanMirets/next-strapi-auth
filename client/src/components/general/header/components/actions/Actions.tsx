import { defaultSession } from "@/lib/session";
import { useAuthContext } from "@/providers/AuthProvider";
import { useAuthModalStore } from "@/store/auth-modal.store";
import { Button } from "@mui/joy";
import styles from "./Actions.module.scss";

export const Actions = () => {
	const { onOpen } = useAuthModalStore();

	const { userSession, setSession, isLoading } = useAuthContext();

	console.log(isLoading);

	const handleLogout = async () => {
		await fetch("/api/auth/logout");
		setSession(defaultSession);
	};

	return (
		<div>
			{userSession.isLoggedIn ? (
				<div className={styles.user}>
					<p>{userSession.userData?.user.email}</p>
					<Button onClick={handleLogout}>Logout</Button>
				</div>
			) : (
				<Button onClick={onOpen}>Auth</Button>
			)}
		</div>
	);
};
