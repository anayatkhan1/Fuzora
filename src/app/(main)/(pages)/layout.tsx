import React from "react";

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
	return (
		<div className="h-screen overflow-scroll rounded-l-3xl border-muted-foreground/20 border-t-[1px] border-l-[1px] pb-20 ">
			{children}
		</div>
	);
};

export default Layout;
