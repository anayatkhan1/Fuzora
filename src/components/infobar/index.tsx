"use client";
import { Input } from "@/components/ui/input";
import { Book, Headphones, Search } from "lucide-react";
import { useEffect } from "react";

import { onPaymentDetails } from "@/app/(main)/(pages)/billing/_actions/payment-connecetions";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useBilling } from "@/providers/billing-provider";
import { UserButton } from "@clerk/nextjs";

type Props = {};

const InfoBar = (props: Props) => {
	const { credits, tier, setCredits, setTier } = useBilling();

	const onGetPayment = async () => {
		const response = await onPaymentDetails();
		if (response) {
			setTier(response.tier!);
			setCredits(response.credits!);
		}
	};

	useEffect(() => {
		onGetPayment();
	}, []);

	return (
		<div className="flex w-full flex-row items-center justify-end gap-6 px-4 py-4 dark:bg-black ">
			<span className="flex items-center gap-2 font-bold">
				<p className="font-light text-gray-300 text-sm">Credits</p>
				{tier == "Unlimited" ? (
					<span>Unlimited</span>
				) : (
					<span>
						{credits}/{tier == "Free" ? "10" : tier == "Pro" && "100"}
					</span>
				)}
			</span>
			<span className="flex items-center rounded-full bg-muted px-4">
				<Search />
				<Input
					placeholder="Quick Search"
					className="border-none bg-transparent"
				/>
			</span>
			<TooltipProvider>
				<Tooltip delayDuration={0}>
					<TooltipTrigger>
						<Headphones />
					</TooltipTrigger>
					<TooltipContent>
						<p>Contact Support</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<TooltipProvider>
				<Tooltip delayDuration={0}>
					<TooltipTrigger>
						<Book />
					</TooltipTrigger>
					<TooltipContent>
						<p>Guide</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<UserButton />
		</div>
	);
};

export default InfoBar;
