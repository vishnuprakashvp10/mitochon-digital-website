import Footer from "@/constant/Footer/Footer";
import "./globals.css";
import { Nunito } from "next/font/google";
import Header from "@/constant/Navbar/Header";
import BottomBar from "@/constant/BottomBar/BottomBar";
import WhatsApp from "@/constant/FAB/WhatsApp";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

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
	const gtmScript = `
		(function(w,d,s,l,i){
			w[l]=w[l]||[];
			w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
			var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
			j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
			f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-KQ5399G4');
	`;

	return (
		<html lang="en">
			<Head>
				{/* Google Tag Manager */}
				<script dangerouslySetInnerHTML={{ __html: gtmScript }} />
				{/* End Google Tag Manager */}
				<meta name="fl-verify" content="9be66eef7379e3946a735731ecf2c665" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<body className={nunito.className}>
				{/* Google Tag Manager (noscript) */}
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-KQ5399G4"
						height="0"
						width="0"
						style={{ display: 'none', visibility: 'hidden' }}
					></iframe>
				</noscript>
				{/* End Google Tag Manager (noscript) */}
				<Header />
				{children}
				<BottomBar />
				<WhatsApp />
				<Footer />
				<Toaster />
			</body>
		</html>
	);
}


