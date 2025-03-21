type TitleCardProps = {
	title: string;
};

const TitleCard = (props: TitleCardProps) => {
	return (
		<div className="bg-[#00205E] dark:bg-[#007AFF] rounded-t-xl w-50 px-2 ml-3">
			<div className="text-white">{props.title}</div>
		</div>
	);
};

export default TitleCard;
