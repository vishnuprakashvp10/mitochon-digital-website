"use client";
import Image from "next/image";
import Link from "next/link";
import image from "../Images/image";
import {
	SpeakerWaveIcon,
	CurrencyDollarIcon,
	ChartBarIcon,
	ComputerDesktopIcon,
	RocketLaunchIcon,
	CommandLineIcon,
	CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { motion } from "framer-motion";

const products = [
	{
		name: "Branding",
		description:
			"Elevate your brand identity with strategic positioning and creative design",
		href: "/services/branding",
		icon: SpeakerWaveIcon,
	},
	{
		name: "Website Development",
		description:
			"Build functional, visually appealing websites tailored to enhance user engagement.",
		href: "/services/website-development",
		icon: CurrencyDollarIcon,
	},
	{
		name: "Content Marketing",
		description:
			"Craft compelling content that drives engagement and boosts SEO.",
		href: "/services/content-marketing",
		icon: ChartBarIcon,
	},
	{
		name: "SEO Service",
		description:
			"Optimize your web presence to improve search engine rankings and attract organic traffic.",
		href: "/services/seo-service",
		icon: ComputerDesktopIcon,
	},
	{
		name: "Paid Online Advertising",
		description:
			"Target and capture the right audience with effective, data-driven ad campaigns.",
		href: "/services/paid-online-advertising",
		icon: RocketLaunchIcon,
	},
	{
		name: "Social Media Marketing",
		description:
			"Engage and grow your audience across all major social platforms.",
		href: "/services/social-media-marketing",
		icon: CommandLineIcon,
	},
	{
		name: "Analytics and Reporting",
		description:
			"Gain valuable insights with detailed analytics and actionable reporting.",
		href: "/services/analytics-and-reporting",
		icon: CodeBracketIcon,
	},
	{
		name: "CRO and Usability",
		description:
			"Enhance website usability and conversion rates through focused optimizations.",
		href: "/services/cro-and-usability",
		icon: CodeBracketIcon,
	},
];
const Header = () => {
	const [toggle, setToggle] = useState(false);
	const segment = useSelectedLayoutSegment();
	const dropdownRef = useRef(null);

	const handleHover = () => {
		setToggle(true);
	};

	// const handleLeave = () => {
	//   setToggle(false);
	// };

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setToggle(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropdownRef]);

	return (
		<header
			ref={dropdownRef}
			className={`sticky top-0 z-50 ${
				segment === null ? "bg-[#FFFFFF]" : "bg-white shadow-sm"
			}`}
		>
			<div className="max-w-7xl mx-auto flex items-center justify-between p-6 lg:px-8">
				<div className="flex flex-1">
					<Link href="/" className="-m-1.5 p-1.5">
						<Image
							className="h-10 w-auto object-contain"
							src={"/Logo.png"}
							alt=""
							width={250}
							height={70}
						/>
					</Link>
				</div>

				<div
					className={`hidden md:flex justify-center items-center gap-0 lg:gap-7 ${
						segment === null ? "text-[#000000]" : "text-gray-900 "
					}`}
				>
					<motion.div whileHover={{ scale: 1.1 }}>
						<Link
							href="/"
							className={`px-3 py-2 text-sm ${
								segment === null ? "navlink-white" : "navlink"
							} ${segment === null ? "active-white" : ""}`}
							onClick={() => setToggle(false)}
						>
							Home
						</Link>
					</motion.div>

					<motion.div whileHover={{ scale: 1.1 }}>
						<Link
							href="/about-us"
							className={`px-3 py-2 text-sm ${
								segment === null ? "navlink-white" : "navlink"
							} ${segment === "about" ? "active" : ""}`}
							onClick={() => setToggle(false)}
						>
							About Us
						</Link>
					</motion.div>

					<motion.div whileHover={{ scale: 1.1 }}>
						<button
							className={`px-3 py-2 text-sm flex items-center ${
								segment === null ? "navlink-white" : "navlink"
							}`}
							onClick={() => setToggle(!toggle)}
							onMouseEnter={handleHover}
						>
							Our Services
							<ChevronDownIcon
								className={`h-5 w-5 flex-none ${toggle ? "rotate-180" : ""}`}
								aria-hidden="true"
							/>
						</button>
					</motion.div>

					<motion.div whileHover={{ scale: 1.1 }}>
						<Link
							href="/our-clients"
							className={`px-3 py-2 text-sm ${
								segment === null ? "navlink-white" : "navlink"
							} ${segment === "our-clients" ? "active" : ""}`}
							onClick={() => setToggle(false)}
						>
							Our Clients
						</Link>
					</motion.div>

					<motion.div whileHover={{ scale: 1.1 }}>
						<Link
							href="/contact-us"
							className={`px-3 py-2 text-sm ${
								segment === null ? "navlink-white" : "navlink"
							} ${segment === "contact" ? "active" : ""}`}
							onClick={() => setToggle(false)}
						>
							Contact Us
						</Link>
					</motion.div>
				</div>

				<div className="flex flex-1 justify-end">
					<a href="tel:+917906514988" className="navbar-btn shadow-lg">
						Call Us
					</a>
				</div>
			</div>

			<div
				className={`p-4 absolute z-99 top-[5.5rem] lg:left-[20%] lg:right-[20%] bg-white rounded-lg shadow-lg grid grid-cols-2 transition-all duration-300 ease-in-out ${
					toggle ? "opacity-100 visible mt-2" : "opacity-0 invisible"
				}`}
			>
				{products.map((item) => {
					return (
						<div
							key={item.name}
							className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-indigo-50"
						>
							<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
								<item.icon
									className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
									aria-hidden="true"
								/>
							</div>
							<div className="flex-auto">
								<Link
									href={item.href}
									className="block font-semibold text-gray-900"
									onClick={() => setToggle(false)}
								>
									{item.name}
									<span className="absolute inset-0" />
								</Link>
								<p className="mt-1 text-gray-600">{item.description}</p>
							</div>
						</div>
					);
				})}
			</div>
		</header>
	);
};

export default Header;
