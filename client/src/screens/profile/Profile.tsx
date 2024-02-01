import { MainLayout } from "@/components/layouts";
import { Container } from "@/components/ui";
import { useAuthContext } from "@/providers/AuthProvider";
import React from "react";

const Profile = () => {
	const { userSession } = useAuthContext();

	if (userSession.isLoggedIn) {
		fetch("http://localhost:1337/api/users/me", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${userSession.userData?.jwt}`,
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	}
	return (
		<MainLayout title="Profile">
			<Container>
				<h1>Profile</h1>
			</Container>
		</MainLayout>
	);
};

export default Profile;
