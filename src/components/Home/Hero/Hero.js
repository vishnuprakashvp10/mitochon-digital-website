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
							Mitochon Digital - Making your digital dreams a reality !
						</h1>
						<p className="text-base text-white mb-4">
						At Mitochon Digital, we craft targeted digital marketing strategies to boost your online presence and drive measurable results across the United Kingdom. Our team excels in branding, website development, content marketing, SEO services, and paid online advertising, ensuring your business stands out. We also specialize in social media marketing, analytics and reporting, and CRO and usability, helping you connect with the right audience and achieve sustainable growth by highlighting your brand&apos;s unique strengths.
						</p>
						<div className="flex gap-5">
							<Link href="/contact-us" className="primary-btn shadow-lg">
								Reach Us
							</Link>
							<Link href="/about-us" className="hover:scale-110 secondary-btn shadow-lg">
								Know More
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
