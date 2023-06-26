export const PetInfoBox = (props) => {
	if (props.type == 'pet') {
		return (
			<>
				<div className="dashboard-pet-info-box-wrapper info-wrapper-vPet">
					<div className="pet-box-topnav">
						<h2>Pet Info</h2>
						<button>Edit</button>
					</div>
					<div className="vPet-box">
						<svg></svg>
						<h3>Brown Female Dog</h3>
					</div>
					<div className="vPet-box">
						<svg></svg>
						<h3>4 years 2 months</h3>
					</div>
					<div className="vPet-box">
						<svg></svg>
						<h3>20 lbs</h3>
					</div>
				</div>
			</>
		);
	}
	if (props.type == 'basic') {
		return (
			<>
				<div className="dashboard-pet-info-box-wrapper info-wrapper-vBasic">
					<div className="pet-box-topnav">
						<svg />
						<h2>Pet Info</h2>
						<button>Edit</button>
					</div>
					<div className="vBasic-box">
						<h4>Spayed/Neutred:</h4>
						<h4>Yes</h4>
					</div>
					<div className="vBasic-box">
						<h4>Microchipped:</h4>
						<h4>Yes</h4>
					</div>
					<div className="vBasic-box">
						<h4>House trained:</h4>
						<h4>Yes</h4>
					</div>
					<div className="vBasic-box">
						<h4>Friendly with dogs:</h4>
						<h4>Yes</h4>
					</div>
					<div className="vBasic-box">
						<h4>Friendly with children:</h4>
						<h4>Yes</h4>
					</div>
					<div className="vBasic-box">
						<h4>Friendly with cats:</h4>
						<h4>Unsure</h4>
					</div>
					<div className="vBasic-box">
						<h4>Adoption date:</h4>
						<h4>April 1, 2019</h4>
					</div>
				</div>
			</>
		);
	}
	if (props.type == 'care') {
		return (
			<>
				<div className="dashboard-pet-info-box-wrapper info-wrapper-vCare">
					<div className="pet-box-topnav">
						<svg />
						<h2>Pet Info</h2>
						<button>Edit</button>
					</div>
					<div className="vCare-box">
						<h4>Potty break schedule</h4>
						<h3>Every 7 hours</h3>
					</div>
					<div className="vCare-box">
						<h4>Energy Level</h4>
						<h3>Moderate</h3>
					</div>
					<div className="vCare-box">
						<h4>Feeding Schedule</h4>
						<h3>Twice a day</h3>
					</div>
					<div className="vCare-box">
						<h4>Can be left alone</h4>
						<h3>At most, 6 hours</h3>
					</div>
					<div className="vCare-box">
						<h4>Medications</h4>
						<h3>Pill - Denamarin - 2x a day w/food</h3>
					</div>
					<div className="vCare-box">
						<h4>Allergies</h4>
						<h3>Wheat</h3>
					</div>
					<div className="vCare-box">
						<h4>Special Intrusctions:</h4>
						<h3>
							If left alone, please put on soft, classical music for Lily and
							make sure she has enough water
						</h3>
					</div>
				</div>
			</>
		);
	}
};
