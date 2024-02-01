import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy";
import theme from "@/utils/theme";
import { useState } from "react";
import AuthProvider from "@/providers/AuthProvider";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<CssVarsProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</CssVarsProvider>
		</AuthProvider>
	);
}
