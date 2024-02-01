import Link from "next/link";
import styles from "./Menu.module.scss";
import classNames from "classnames";
import { useRouter } from "next/router";

type Props = {
	className?: string;
};

const menuItems = [
	{ title: "Home", link: "/" },
	{ title: "Profile", link: "/profile" },
];

export const Menu = ({ className }: Props) => {
	const router = useRouter();

	return (
		<nav className={classNames(styles.root, className)}>
			<ul className={styles.list}>
				{menuItems.map((item) => (
					<li
						className={classNames(
							styles.item,
							router.pathname === item.link && styles.active,
						)}
						key={item.link}
					>
						<Link href={item.link}>{item.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
