import { IMeta } from "@/types/meta.interface";
import Head from "next/head";

export const Meta = ({ title, description }: IMeta) => {
	return (
		<Head>
			<title>{title}</title>
			<meta
				name="description"
				content={description ? description : "Next Strapi auth"}
			/>
		</Head>
	);
};
