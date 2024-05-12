"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import image from "@/constant/Images/image";
import Image from "next/image";

const services = [
	{
		heading: "Branding",
		imgUrl: image.digitalMarketing,
		hoverBg: "pink-hover",
		iconColor: "pink-text",
	},
	{
		heading: "Website Development",
		imgUrl: image.wd,
		hoverBg: "paste-hover",
		iconColor: "paste-text",
	},
	{
		heading: "Content Marketing",
		imgUrl: image.smo,
		hoverBg: "yellow-hover",
		iconColor: "yellow-text",
	},
	{
		heading: "SEO Service",
		imgUrl: image.seo,
		hoverBg: "purple-hover",
		iconColor: "purple-text",
	},
	{
		heading: "Paid Online Advertising",
		imgUrl: image.wo,
		hoverBg: "purple-hover",
		iconColor: "pink-text",
	},
	{
		heading: "Social Media Marketing",
		imgUrl: image.socialMarketing,
		hoverBg: "paste-hover",
		iconColor: "paste-text",
	},
	{
		heading: "Analytics and Reporting",
		imgUrl: image.ppc,
		hoverBg: "yellow-hover",
		iconColor: "yellow-text",
	},
	{
		heading: "CRO and Usability",
		imgUrl: image.ppc,
		hoverBg: "yellow-hover",
		iconColor: "yellow-text",
	},
];

const CaseStudy = () => {
	const [width, setWidth] = useState(0);
	const carousel = useRef();
	const controls = useAnimation(); // using Framer Motion's animation controls

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

		// Calculate the width of a single slide (assumption: all slides are of equal width)
		const slideWidth = carousel.current.scrollWidth / services.length;

		let currentSlide = 0;

		// Function to perform the slide
		const performSlide = () => {
			currentSlide++;
			if (currentSlide >= services.length) {
				currentSlide = 0;
			}
			controls.start({ x: -(currentSlide * slideWidth) });
		};

		// Interval to change slides every 1.5 seconds
		const interval = setInterval(performSlide, 1500);

		return () => clearInterval(interval); // Cleanup the interval on component unmount
	}, [width, controls]);

	return (
		<section className="py-24 sm:py-32">
			<div className="app__container grid grid-cols-1 md:grid-cols-2 gap-y-8">
				<div className="my-auto">
					<h1 className="primary-heading">
						Any Doubt? Just <br />
						Check Out <span className="highlight">Our Services.</span>
					</h1>
				</div>

				<div>
					<motion.div
						ref={carousel}
						className="carousel"
						whileTap={{ cursor: "grabbing" }}
					>
						<motion.div
							drag="x"
							dragConstraints={{ right: 0, left: -width }}
							className="inner-carousel py-2"
							animate={controls}
						>
							{services.map((service, key) => (
								<motion.div key={key} className="mx-2">
									<div
										className={`common-single-card flex flex-col py-8 md:py-12 px-16 md:px-20  ${service.hoverBg}`}
									>
										<div
											className={`mx-auto w-44 md:w-52 h-44 md:h-52 ${service.iconColor}`}
										>
											<Image
												src={service.imgUrl}
												height={400}
												width={400}
												alt=""
											/>
										</div>
										<div className="text-center">
											<h3 className="text-xl font-bold mt-8 mb-4">
												{service.heading}
											</h3>
										</div>
									</div>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default CaseStudy;
