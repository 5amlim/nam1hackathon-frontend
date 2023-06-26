import { Chart } from 'chart.js/auto';
import { Data } from '../assets/dummyData';
import { useEffect, useMemo, useRef } from 'react';
export const Dashboard = () => {
	feather.replace({ 'aria-hidden': 'true' });
	const pet = useMemo(() => {
		return Data.petInfo[0];
	});
	const list = useMemo(() => {
		return Data.ownedLists;
	});
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="dashboard-pet-info-jumbo">
							<div className="dashboard-pet-info-jumbo-buttons">
								<div className="edit-photo-button"></div>
								<div className="share-pet-button"></div>
							</div>
							<h3>Lily</h3>
						</div>
					</div>
				</div>
				<div className="row row-cols-1 row-cols-lg-3">
					<div className="col">
						<div className="dashboard-pet-info-box-wrapper info-wrapper-vPet">
							<div className="pet-box-topnav">
								<h2>Pet Info</h2>
								<button>Edit</button>
							</div>
							<div className="vPet-box">
								<svg></svg>
								<h3>{`${pet.color} ${pet.gender} ${pet.type}`}</h3>
							</div>
							<div className="vPet-box">
								<svg></svg>
								<h3>
									{`${pet.age.years} years ` +
										(pet.age.months > 0 ? `${pet.age.months} months` : '')}
								</h3>
							</div>
							<div className="vPet-box">
								<svg></svg>
								<h3>{`${pet.weight} lbs`}</h3>
							</div>
						</div>
						<div className="dashboard-pet-info-box-wrapper info-wrapper-vBasic">
							<div className="pet-box-topnav">
								<svg />
								<h2>Pet Info</h2>
								<button>Edit</button>
							</div>
							<div className="vBasic-box">
								<h4>Spayed/Neutred:</h4>
								<h4>{pet.basicInfo.spayed}</h4>
							</div>
							<div className="vBasic-box">
								<h4>Microchipped:</h4>
								<h4>{pet.basicInfo.chipped}</h4>
							</div>
							<div className="vBasic-box">
								<h4>House trained:</h4>
								<h4>{pet.basicInfo.houseTrained}</h4>
							</div>
							<div className="vBasic-box">
								<h4>Friendly with dogs:</h4>
								<h4>{pet.basicInfo.friendly.dogs}</h4>
							</div>
							<div className="vBasic-box">
								<h4>Friendly with children:</h4>
								<h4>{pet.basicInfo.friendly.children}</h4>
							</div>
							<div className="vBasic-box">
								<h4>Friendly with cats:</h4>
								<h4>{pet.basicInfo.friendly.cats}</h4>
							</div>
							<div className="vBasic-box">
								<h4>Adoption date:</h4>
								<h4>{pet.adopted}</h4>
							</div>
						</div>
						<div className="dashboard-pet-info-box-wrapper info-wrapper-vCare">
							<div className="pet-box-topnav">
								<svg />
								<h2>Pet Info</h2>
								<button>Edit</button>
							</div>
							<div className="vCare-box">
								<h4>Potty break schedule</h4>
								<h3>
									{`${pet.careInfo.bathroom.period} ` +
										(pet.careInfo.bathroom.hours > 0
											? `${pet.careInfo.bathroom.hours} hours `
											: '') +
										(pet.careInfo.bathroom.minutes > 0
											? `and ${pet.careInfo.bathrrom.minutes} minutes`
											: '')}
								</h3>
							</div>
							<div className="vCare-box">
								<h4>Energy Level</h4>
								<h3>{pet.energy}</h3>
							</div>
							<div className="vCare-box">
								<h4>Feeding Schedule</h4>
								<h3>
									{`${pet.careInfo.feeding.period} ` +
										(pet.careInfo.feeding.hours > 0
											? `${pet.careInfo.feeding.hours} hours`
											: '') +
										(pet.careInfo.feeding.minutes > 0
											? ` and ${pet.careInfo.feeding.minutes} minutes`
											: '')}
								</h3>
							</div>
							<div className="vCare-box">
								<h4>Can be left alone</h4>
								<h3>
									{`At most, ` +
										(pet.careInfo.leftAlone.hours > 0
											? `${pet.careInfo.leftAlone.hours} hours`
											: '') +
										(pet.careInfo.leftAlone.minutes > 0
											? ` and ${pet.careInfo.leftAlone.minutes} minutes`
											: '')}
								</h3>
							</div>
							<div className="vCare-box">
								<h4>Medications</h4>
								{pet.careInfo.medication.map((e, key) => {
									return (
										<h3 className="vCare-meds" key={key}>
											{`${e.type} - ${e.name} - ${e.period} (${e.info})`}
										</h3>
									);
								})}
							</div>
							<div className="vCare-box">
								<h4>Allergies</h4>
								{pet.careInfo.allergies.map((e, key) => {
									return (
										<h3 className="vCare-allergies" key={key}>
											{e}
										</h3>
									);
								})}
							</div>
							<div className="vCare-box">
								<h4>Special Instructions:</h4>
								<h3>{pet.careInfo.specialInfo}</h3>
							</div>
						</div>
						<div className="care-plans-box">
							<div className="care-plans-box-top">
								<h2>Care Plans</h2>
								<svg />
							</div>
							{Object.values(list).map((e, key) => {
								return (
									<div className="care-plan-wrapper" key={key}>
										<div className="care-plan-title">
											<h2>{e.carePlanName}</h2>
										</div>
										<div className="care-plan-link">{e.link}</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
