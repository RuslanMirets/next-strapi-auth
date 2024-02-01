import { PropsWithChildren } from "react";
import styles from "./Container.module.scss";
import classNames from "classnames";

type Props = {
	className?: string;
};

export const Container = ({
	children,
	className,
}: PropsWithChildren & Props) => {
	return <div className={classNames(styles.root, className)}>{children}</div>;
};
