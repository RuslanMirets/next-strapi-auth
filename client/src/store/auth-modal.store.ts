import { create } from "zustand";

interface IAuthModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export const useAuthModalStore = create<IAuthModalStore>()((set) => ({
	isOpen: false,
	onOpen: () => set(() => ({ isOpen: true })),
	onClose: () => set(() => ({ isOpen: false })),
}));
