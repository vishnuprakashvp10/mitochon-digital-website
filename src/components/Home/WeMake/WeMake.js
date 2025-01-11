"use client";
import { motion } from "framer-motion";
import Link from 'next/link';
import {
	CodeBracketIcon,
	CodeBracketSquareIcon,
	PencilSquareIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
	{
		name: "Website Content & Development",
		description:
			"To properly showcase every aspect of your product, your website needs to keep up with the times and meet customer expectations. At Mitochon Digital, we create websites that don’t just grab attention but truly connect with your audience, inspiring them to engage and convert.",
		icon: CodeBracketIcon,
		link:"/services/website-development"
	},
	{
		name: "CRO & Usability",
		description:
			"At Mitochon Digital, we know that a winning digital marketing strategy isn’t just about driving traffic—it’s about turning that traffic into loyal customers. Using a data-driven approach, we dive deep into user behaviour and preferences with advanced analytics.",
		icon: PencilSquareIcon,
		link:"/services/cro-and-usability"
	},
	{
		name: "Analytics and Reporting",
		description:
			"At Mitochon Digital, we tap into search behaviour to build personalised audience segments using Google Analytics. Our standard reporting service, part of our retainer, pulls together data from Google Analytics, Google Ads, and social platforms like Facebook, Twitter, LinkedIn, and Instagram.",
		icon: CodeBracketSquareIcon,
		link:"/services/analytics-and-reporting"
	},
	{
		name: "Targeted Audience",
		description:
			"At Mitochon Digital, we don’t stop at your direct target audience. We go the extra mile, reaching potential customers who could benefit from what you offer. Join us to expand your market reach and establish your brand as a major player in your industry.",
		icon: UserGroupIcon,
		link:"/services/content-marketing"
	},
];

const variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const items = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
		},
	},
};

export default function WeMake() {
	return (
		<div className="bg-slate-50 py-24 sm:py-32">
			<div className="app__container">
				<div className="mx-auto max-w-2xl lg:text-center">
					<p className="mt-2 primary-heading text-gray-900 text-center">
						We Enhance Your <span className="highlight">SEO Service</span>{" "}
						Faster
					</p>
					<p className="mt-6 text-lg leading-8 app__text text-center">
					For expert advice on sharpening your SEO strategy and getting the most out of your digital marketing spend, give Mitochon Digital a shout. Partner with us to see a game-changing boost in your SEO performance, making sure your digital presence stands out with the best SEO marketing company in the UK.
</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<motion.dl
						variants={variants}
						initial="hidden"
						whileInView="show"
						className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
					>
						{features.map((feature) => (
							<Link key={feature.name} href={feature.link} passHref>
								<motion.div
									variants={items}
									className="relative pl-24"
								>
									<dt className="text-xl font-extrabold leading-7 text-gray-900">
										<div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full shadow-lg bg-white transition-all text-green-600 hover:text-white hover:bg-gradient-to-r hover:from-[#96A210] hover:to-[#176301]">
											<feature.icon className="h-6 w-6 " aria-hidden="true" />
										</div>
										{feature.name}
									</dt>
									<dd className="mt-2 text-base leading-7 app__text">
										{feature.description}
									</dd>
								</motion.div>
							</Link>
						))}
					</motion.dl>
				</div>
			</div>
		</div>
	);
}
