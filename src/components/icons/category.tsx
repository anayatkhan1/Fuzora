import clsx from "clsx";

type Props = { selected: boolean };

function Category({ selected }: Props) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="3"
				y="3"
				width="8"
				height="8"
				rx="3"
				className={clsx(
					"fill-[#BABABB] transition-all group-hover:fill-[#7540A9] dark:fill-[#353346] dark:group-hover:fill-[#C8C7FF]",
					{ "dark:!fill-[#C8C7FF] fill-[#7540A9] ": selected },
				)}
			/>
			<rect
				x="3"
				y="13"
				width="8"
				height="8"
				rx="3"
				className={clsx(
					"fill-[#BABABB] transition-all group-hover:fill-[#7540A9] dark:fill-[#353346] dark:group-hover:fill-[#C8C7FF]",
					{ "dark:!fill-[#C8C7FF] fill-[#7540A9] ": selected },
				)}
			/>
			<rect
				x="13"
				y="3"
				width="8"
				height="8"
				rx="3"
				className={clsx(
					"fill-[#BABABB] transition-all group-hover:fill-[#7540A9] dark:fill-[#353346] dark:group-hover:fill-[#C8C7FF]",
					{ "dark:!fill-[#C8C7FF] fill-[#7540A9] ": selected },
				)}
			/>
			<rect
				x="13"
				y="13"
				width="8"
				height="8"
				rx="3"
				className={clsx(
					"fill-[#5B5966] transition-all group-hover:fill-[#BD8AFF] dark:fill-[#C0BFC4] dark:group-hover:fill-[#9F54FF] ",
					{ "dark:!fill-[#7540A9] fill-[#BD8AFF] ": selected },
				)}
			/>
		</svg>
	);
}

export default Category;
