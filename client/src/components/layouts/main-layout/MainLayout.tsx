import { AuthModal, Header, Meta } from "@/components/general";
import { IMeta } from "@/types/meta.interface";
import { PropsWithChildren } from "react";
import styles from "./MainLayout.module.scss";
import classNames from "classnames";
import { Nunito } from "next/font/google";

type Props = {
	className?: string;
};

export const nunito = Nunito({ subsets: ["latin", "cyrillic"] });

export const MainLayout = ({
	children,
	title,
	description,
	className,
}: PropsWithChildren & IMeta & Props) => {
	return (
		<>
			<Meta title={title} description={description} />
			<div className={classNames(styles.wrapper, nunito.className, className)}>
				<Header />
				<main className={styles.main}>{children}</main>
			</div>
			<AuthModal />
		</>
	);
};
