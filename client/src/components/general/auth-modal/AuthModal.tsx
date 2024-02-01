import { useAuthModalStore } from "@/store/auth-modal.store";
import { Modal, ModalClose, ModalDialog, ModalOverflow } from "@mui/joy";
import { LoginForm } from "./components";

export const AuthModal = () => {
	const { isOpen, onClose } = useAuthModalStore();

	return (
		<Modal open={isOpen} onClose={onClose}>
			<ModalOverflow>
				<ModalDialog minWidth="450px">
					<ModalClose />
					<div>
						<LoginForm />
					</div>
				</ModalDialog>
			</ModalOverflow>
		</Modal>
	);
};
