import { PetInfoBox } from './petInfoBox';

export const PetInfo = () => {
	return (
		<>
			<div className="dashboard-pet-info-container">
				<div className="dashboard-pet-info-jumbo">
					<div className="dashboard-pet-info-jumbo-buttons">
						<div className="edit-photo-button"></div>
						<div className="share-pet-button"></div>
					</div>
					<h3>Lily</h3>
				</div>
				<PetInfoBox />
				<PetInfoBox />
				<PetInfoBox />
				<div className="care-plans-box">
					<div className="care-plans-box-top">
						<h2>Care Plans</h2>
						<svg />
					</div>
					<div className="care-plan-wrapper">
						<div className="care-plan-title">
							<h2>Summer '23 Trip</h2>
						</div>
						<div className="care-plan-link">Copy Link</div>
					</div>
				</div>
			</div>
		</>
	);
};
