import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

type Props = {};

const Navbar = async (props: Props) => {
	const user = await currentUser();
	return (
		<header className="fixed top-0 right-0 left-0 z-[100] flex items-center justify-between border-neutral-900 border-b-[1px] bg-black/40 px-4 py-4 backdrop-blur-lg">
			<aside className="flex items-center gap-[2px]">
				<p className="font-bold text-3xl">FuZora</p>
			</aside>
			<nav className="absolute top-[50%] left-[50%] hidden translate-x-[-50%] translate-y-[-50%] transform md:block">
				<ul className="flex list-none items-center gap-4">
					<li>
						<Link href="#">Products</Link>
					</li>
					<li>
						<Link href="#">Pricing</Link>
					</li>
					<li>
						<Link href="#">Clients</Link>
					</li>
					<li>
						<Link href="#">Resources</Link>
					</li>
					<li>
						<Link href="#">Documentation</Link>
					</li>
					<li>
						<Link href="#">Enterprise</Link>
					</li>
				</ul>
			</nav>
			<aside className="flex items-center gap-4">
				<Link
					href="/dashboard"
					className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
				>
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 font-medium text-sm text-white backdrop-blur-3xl">
						{user ? "Dashboard" : "Get Started"}
					</span>
				</Link>
				{user ? <UserButton afterSignOutUrl="/" /> : null}
				<MenuIcon className="md:hidden" />
			</aside>
		</header>
	);
};

export default Navbar;
