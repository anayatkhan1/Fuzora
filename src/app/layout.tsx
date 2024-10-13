import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { BillingProvider } from "@/providers/billing-provider";
import ModalProvider from "@/providers/modal-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Fuzora",
	description: "Automate your work with Fuzora",
	openGraph: {
		title: "Fuzora",
		description: "Automate your work with Fuzora",
		url: "https://fuzora.xyz",
		images: [
			{
				url: "/fuzora-thumbnails.png",
				width: 1260,
				height: 800,
			},
		],
		locale: "en-EN",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider
			publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
		>
			<html lang="en">
				<head>
					<link rel="icon" href="/favicon.ico" sizes="any" />
				</head>
				<body className={font.className}>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						<BillingProvider>
							<ModalProvider>
								{children}
								<Toaster />
							</ModalProvider>
						</BillingProvider>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
