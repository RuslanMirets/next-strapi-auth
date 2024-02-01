import { MainLayout } from "@/components/layouts";
import { Container } from "@/components/ui";
import React from "react";
import Cookies from "js-cookie";

const Home = () => {
	return (
		<MainLayout title="Home">
			<Container>
				<h1>Home</h1>
			</Container>
		</MainLayout>
	);
};

export default Home;
