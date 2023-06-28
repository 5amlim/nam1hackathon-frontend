import { Chart } from 'chart.js/auto';
import { Data } from '../assets/dummyData';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Add } from '../assets/svgs/add';
import { Share } from '../assets/svgs/share';
import { Link } from '../assets/svgs/link';
import { Dog } from '../assets/svgs/dog';
import { Heart } from '../assets/svgs/heart';
import { Clipboard } from '../assets/svgs/clipboard';
import { Arrow } from '../assets/svgs/arrow';
export const Dashboard = () => {
	feather.replace({ 'aria-hidden': 'true' });
	const pet = useMemo(() => {
		return Data.petInfo[0];
	});
	const list = useMemo(() => {
		return Data.ownedLists;
	});
	const [petInfoClicked, setPetInfoClicked] = useState(false);
	const [careInfoClicked, setCareInfoClicked] = useState(false);
	const [desktop, setDesktop] = useState(window.innerWidth);
	const handlePetInfoClick = () => {
		if (petInfoClicked) {
			setPetInfoClicked(false);
		} else {
			setPetInfoClicked(true);
		}
	};
	const handleCareInfoClick = () => {
		if (careInfoClicked) {
			setCareInfoClicked(false);
		} else {
			setCareInfoClicked(true);
		}
	};
	addEventListener('resize', () => {
		setDesktop(window.innerWidth);
	});
	return (
		<>
			<div className="container dashboard-container">
				<div className="row row-fluid ">
					<div className="col no-padding">
						<div className="dashboard-pet-info-jumbo">
							<div
								className="dashboard-pet-info-jumbo-image w-100"
								style={{
									backgroundImage: `url(${pet.img})`,
								}}
							/>
							<div className="jumbo-gradient h-100 w-100" />
							<div className="dashboard-pet-info-jumbo-buttons w-100 h-100">
								<div className="edit-photo-button">
									<button>Edit</button>
								</div>
								<div className="share-pet-button">
									<a>
										<Share />
									</a>
								</div>
							</div>
							<h3 className="w-100">Lily</h3>
						</div>
					</div>
				</div>
				<div className="row row-cols-1 row-cols-xl-3 d-flex justify-content-between card-box-row">
					<div className="col card-box-col">
						<div className="care-plans-box box-card card d-flex flex-column align-items-center mt-3">
							<div className="care-plans-box-top d-flex justify-content-between w-100 mb-3">
								<h2>Care Plans</h2>
								<a>
									<Add />
								</a>
							</div>
							<div className="care-plans-container">
								{Object.values(list).map((e, key) => {
									return (
										<div
											className="care-plan-wrapper py-3 d-flex align-items-center"
											key={key}
										>
											<div className="care-plan-title w-50 px-3">
												<h2 className="no-margins">{e.carePlanName}</h2>
											</div>
											<div className="care-plan-link px-3 w-50 h-100">
												<a className="w-100 py-1">
													<div className="w-100 d-flex align-items-center justify-content-around">
														<p className="no-margins">Copy Link</p>
														<Link />
													</div>
												</a>
												{e.link}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className="col card-box-col">
						<div className="dashboard-pet-info-box-wrapper info-wrapper-vPet box-card card mt-3">
							<div className="pet-box-topnav card-topper">
								<h2 className="txt-1 no-margins">Pet Info</h2>
								<button>Edit</button>
							</div>

							<>
								{' '}
								<div className="vPet-box">
									<Dog />
									<h3 className="txt-1 no-margins">{`${pet.color} ${pet.gender} ${pet.type}`}</h3>
								</div>
								<div className="vPet-box">
									<Heart />
									<h3 className="txt-1 no-margins">
										{`${pet.age.years} years ` +
											(pet.age.months > 0 ? `${pet.age.months} months` : '')}
									</h3>
								</div>
								<div className="vPet-box">
									<Clipboard />
									<h3 className="txt-1 no-margins">{`${pet.weight} lbs`}</h3>
								</div>
							</>
						</div>
					</div>
					<div className="col card-box-col">
						{' '}
						<div className="dashboard-pet-info-box-wrapper info-wrapper-vBasic box-card card mt-3 align-items-start">
							<div className="pet-box-topnav card-topper">
								{desktop < 800 && (
									<>
										<a onClick={handlePetInfoClick}>
											<Arrow />
										</a>
									</>
								)}

								<h2 className="txt-1">Basic Info</h2>
								<button>Edit</button>
							</div>
							{(petInfoClicked || desktop > 800) && (
								<>
									{' '}
									<div className="vBasic-box">
										<h4>Spayed/Neutred:</h4>
										<h3>{pet.basicInfo.spayed}</h3>
									</div>
									<hr />
									<div className="vBasic-box">
										<h4>Microchipped:</h4>
										<h3>{pet.basicInfo.chipped}</h3>
									</div>
									<hr />
									<div className="vBasic-box">
										<h4>House trained:</h4>
										<h3>{pet.basicInfo.houseTrained}</h3>
									</div>
									<hr />
									<div className="vBasic-box">
										<h4>Friendly with dogs:</h4>
										<h3>{pet.basicInfo.friendly.dogs}</h3>
									</div>
									<hr />
									<div className="vBasic-box">
										<h4>Friendly with children:</h4>
										<h3>{pet.basicInfo.friendly.children}</h3>
									</div>
									<hr />
									<div className="vBasic-box">
										<h4>Friendly with cats:</h4>
										<h3>{pet.basicInfo.friendly.cats}</h3>
									</div>
									<hr />
									<div className="vBasic-box">
										<h4>Adoption date:</h4>
										<h3>{pet.adopted}</h3>
									</div>
								</>
							)}
						</div>
					</div>
					<div className="col card-box-col">
						<div className="dashboard-pet-info-box-wrapper info-wrapper-vCare box-card card mt-3 align-items-start">
							<div className="pet-box-topnav card-topper">
								{desktop < 800 && (
									<>
										<a onClick={handleCareInfoClick}>
											<Arrow />
										</a>
									</>
								)}

								<h2>Care Info</h2>
								<button>Edit</button>
							</div>
							{(careInfoClicked || desktop > 800) && (
								<>
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
									<hr />
									<div className="vCare-box">
										<h4>Energy Level</h4>
										<h3>{pet.energy}</h3>
									</div>
									<hr />
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
									<hr />
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
									<hr />
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
									<hr />
									<div className="vCare-box">
										<h4>Allergies</h4>
										{pet.careInfo.allergies.map((e, key) => {
											return (
												<>
													{' '}
													<h5 className="vCare-allergies" key={key}>
														{e}
													</h5>
												</>
											);
										})}
									</div>
									<hr />
									<div className="vCare-box">
										<h4>Special Instructions:</h4>
										<h3>{pet.careInfo.specialInfo}</h3>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
