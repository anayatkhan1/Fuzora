"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export const ContainerScroll = ({
	titleComponent,
}: {
	titleComponent: string | React.ReactNode;
}) => {
	const containerRef = useRef<any>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
	});
	const [isMobile, setIsMobile] = React.useState(false);

	React.useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => {
			window.removeEventListener("resize", checkMobile);
		};
	}, []);

	const scaleDimensions = () => {
		return isMobile ? [0.7, 0.9] : [1.05, 1];
	};

	const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
	const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
	const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

	return (
		<div
			className="relative flex h-[80rem] items-center justify-center p-20"
			ref={containerRef}
		>
			<div
				className="relative w-full py-40"
				style={{
					perspective: "1000px",
				}}
			>
				<Header translate={translate} titleComponent={titleComponent} />
				<Card rotate={rotate} translate={translate} scale={scale} />
			</div>
		</div>
	);
};

export const Header = ({ translate, titleComponent }: any) => {
	return (
		<motion.div
			style={{
				translateY: translate,
			}}
			className="div mx-auto max-w-5xl text-center"
		>
			{titleComponent}
		</motion.div>
	);
};

export const Card = ({
	rotate,
	scale,
	translate,
}: {
	rotate: any;
	scale: any;
	translate: any;
}) => {
	return (
		<motion.div
			style={{
				rotateX: rotate, // rotate in X-axis
				scale,
				boxShadow:
					"0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
			}}
			className="-mt-12 mx-auto h-[30rem] w-full max-w-5xl rounded-[30px] bg-[#222222] p-6 shadow-2xl md:h-[40rem]"
		>
			<div className="h-full w-full gap-4 overflow-hidden rounded-2xl bg-gray-100 p-4 transition-all ">
				<Image
					src="/temp-banner.png"
					fill
					alt="bannerImage"
					className="rounded-2xl border-8 object-cover"
				/>
			</div>
		</motion.div>
	);
};
