import { onGetWorkflows } from "../_actions/workflow-connections";
import MoreCredits from "./more-creadits";
import Workflow from "./workflow";

type Props = {};

const Workflows = async (props: Props) => {
	const workflows = await onGetWorkflows();
	return (
		<div className="relative flex flex-col gap-4">
			<section className="m-2 flex flex-col">
				<MoreCredits />
				{workflows?.length ? (
					workflows.map((flow) => <Workflow key={flow.id} {...flow} />)
				) : (
					<div className="mt-28 flex items-center justify-center text-muted-foreground">
						No Workflows
					</div>
				)}
			</section>
		</div>
	);
};

export default Workflows;
