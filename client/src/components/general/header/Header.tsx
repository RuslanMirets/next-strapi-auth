import { Container } from "@/components/ui";
import Link from "next/link";
import styles from "./Header.module.scss";
import { Actions, Menu } from "./components";

export const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.body}>
					<Link className={styles.logo} href="/">
						LOGO
					</Link>
					<Menu className={styles.menu} />
					<Actions />
				</div>
			</Container>
		</header>
	);
};
