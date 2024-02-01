import Home from "@/screens/home/Home";
import { GetServerSideProps } from "next";

const HomePage = () => {
	return <Home />;
};

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {},
	};
};

export default HomePage;
