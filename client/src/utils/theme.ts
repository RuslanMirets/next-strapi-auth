import { nunito } from "@/components/layouts/main-layout/MainLayout";
import { extendTheme } from "@mui/joy";

const theme = extendTheme({
	fontFamily: {
		body: nunito.style.fontFamily,
	},
	components: {
		JoyButton: {
			styleOverrides: {
				root: {
					fontSize: "1rem",
				},
			},
		},
		JoyModalDialog: {
			defaultProps: {
				maxWidth: "md",
			},
		},
	},
});

export default theme;
