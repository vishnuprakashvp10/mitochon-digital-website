"use client";
import Image from "next/image";
import "./Hero.css";
import image from "@/constant/Images/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<section className="app__hero relative">
			<div className="mx-auto max-w-7xl p-6 lg:px-8 z-2">
				<div className="flex items-center justify-between pb-32 md:pb-36">
					<div className="flex-1">
						<h1 className="text-4xl lg:text-6xl text-white font-extrabold mb-4 capitalize">
							Mitochon Pixel - Making your digital dreams a reality !
						</h1>
						<p className="text-base  text-justify text-white mb-4">
						At Mitochon Pixel, we whip up bespoke digital marketing strategies to give your online presence a proper boost and deliver smashing results across the UK. Our  <span className="font-bold">crack </span>team is top-notch at branding, website development, content marketing, SEO services, and paid online advertising, making sure your business gets the spotlight it deserves. We&apos;re also <span className="font-bold">dab hands</span> at social media marketing, analytics and reporting, and CRO and usability, helping you connect with the right crowd and achieve long-term growth by showcasing what makes your brand one of a kind.						</p>
						<div className="flex gap-5">
							<Link href="/contact-us" className="primary-btn shadow-lg">
								Contact Us
							</Link>
							<Link href="/about-us" className="hover:scale-110 secondary-btn shadow-lg">
								Learn More
							</Link>
						</div>
					</div>
					<div className=" flex-1 hidden lg:block">
						<Image src={image.webdev} alt="dm" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;


