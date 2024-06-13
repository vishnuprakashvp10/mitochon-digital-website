import Footer from "@/constant/Footer/Footer";
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";
import { Nunito } from "next/font/google";
import Header from "@/constant/Navbar/Header";
import BottomBar from "@/constant/BottomBar/BottomBar";
import WhatsApp from "@/constant/FAB/WhatsApp";
import Head from "next/head";

const nunito = Nunito({
	weight: ["200", "300", "400", "500", "600", "700", "800"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Digital Marketing Agency / Expert at SEO, SMO",
	description:
		"All digital marketing services, seo, smo, PPC, web development.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			      <GoogleTagManager gtmId="G-5EKJZZ045S" />
			<head>
				<meta name="fl-verify" content="9be66eef7379e3946a735731ecf2c665" />
				<link rel="icon" href="/favicon.png" />
			</head>
			<body className={nunito.className}>
				<Header />
				{children}
				<BottomBar />
				<WhatsApp />
				<Footer />
			</body>
		</html>
	);
} 

