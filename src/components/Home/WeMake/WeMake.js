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
			"To effectively showcase every facet of your product, your website must continually evolve to meet the shifting demands of time and customer expectations. At Mitochon Digital, we focus on creating websites that not only attract but also resonate deeply with your audience, encouraging them to engage and convert.",
		icon: CodeBracketIcon,
		link:"/services/website-development"
	},
	{
		name: "CRO & Usability",
		description:
			"At Mitochon Digital, we understand that a successful digital marketing strategy isn't just about driving traffic—it's about converting that traffic into loyal customers. We employ a data-driven approach, utilizing advanced analytics to deeply understand user behavior and preferences.",
		icon: PencilSquareIcon,
		link:"/services/cro-and-usability"
	},
	{
		name: "Analytics and Reporting",
		description:
			"At Mitochon Digital, we utilize search behavior to craft personalized audience segments through Google Analytics. Our standard reporting service, included in our retainer, combines data from multiple sources such as Google Analytics, Google Ads, and social media platforms like Facebook, Twitter, LinkedIn, and Instagram.",
		icon: CodeBracketSquareIcon,
		link:"/services/analytics-and-reporting"
	},
	{
		name: "Targeted Audience",
		description:
			"At Mitochon Digital, we go beyond traditional boundaries by marketing not only to your direct target audience but also to potential customers who could benefit from your offerings. Join us on a transformative journey to broaden your market impact and establish your brand as a dominant influence in your industry.",
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
					For expert guidance on optimizing your SEO strategy and maximizing your digital marketing investments, reach out to Mitochon Digital. Partner with us to experience a transformative impact on your SEO performance, ensuring your digital presence stands out with the best SEO marketing company in the UK.
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
