import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
} from "@/components/ui/drawer";
import { useModal } from "@/providers/modal-provider";

import React from "react";
import { Button } from "../ui/button";

type Props = {
	title: string;
	subheading: string;
	children: React.ReactNode;
	defaultOpen?: boolean;
};

const CustomModal = ({ children, subheading, title, defaultOpen }: Props) => {
	const { isOpen, setClose } = useModal();
	const handleClose = () => setClose();

	return (
		<Drawer open={isOpen} onClose={handleClose}>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle className="text-center">{title}</DrawerTitle>
					<DrawerDescription className="flex h-96 flex-col items-center gap-4 overflow-scroll text-center">
						{subheading}
						{children}
					</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter className="flex flex-col gap-4 border-t-[1px] border-t-muted bg-background">
					<DrawerClose>
						<Button variant="ghost" className="w-full" onClick={handleClose}>
							Close
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default CustomModal;
