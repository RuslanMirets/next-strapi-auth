import { Button, Input } from "@mui/joy";
import styles from "./LoginForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuthContext } from "@/providers/AuthProvider";
import { useAuthModalStore } from "@/store/auth-modal.store";

type Inputs = {
	email: string;
	password: string;
};

export const LoginForm = () => {
	const { onClose } = useAuthModalStore();

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<Inputs>();

	const { setSession } = useAuthContext();

	const onSubmit: SubmitHandler<Inputs> = async (dto) => {
		const value = {
			identifier: dto.email,
			password: dto.password,
		};

		const response = await fetch("/api/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(value),
		});
		const data = await response.json();

		if (data.userData.error) {
			console.log(data.userData.error);
		} else {
			setSession(data);
			onClose();
		}
	};

	return (
		<form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={styles.title}>Authorization</h2>
			<div className={styles.inputs}>
				<Input type="email" placeholder="Email" {...register("email")} />
				<Input
					type="password"
					placeholder="Password"
					{...register("password")}
				/>
				<Button type="submit" loading={isSubmitting}>
					Sign in
				</Button>
			</div>
		</form>
	);
};
