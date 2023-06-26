export const InfoBox = (props) => {
	return (
		<>
			<div className="info-box-container">
				<div className="info-box-info-wrapper">
					<h4 className="info-box-title">{props.title}</h4>
					<div className="info-box-info">{props.info}</div>
				</div>
				{props.call && <div className="info-box-call"></div>}
			</div>
		</>
	);
};
