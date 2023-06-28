import dogImg from '/assets/dog.jpg';
export const Data = {
	petInfo: {
		0: {
			name: 'Lily',
			gender: 'Female',
			color: 'Brown',
			age: {
				years: 4,
				months: 2,
			},
			energy: 'Moderate',
			weight: 20,
			basicInfo: {
				spayed: 'Yes',
				chipped: 'Yes',
				houseTrained: 'Yes',
				friendly: {
					dogs: 'Yes',
					children: 'Yes',
					cats: 'Unsure',
				},
			},
			adopted: 'April 1, 2019',
			img: 'https://cdn.discordapp.com/attachments/1121251028294176858/1123401597427396659/b92t9499-3.JPG',
			type: 'Dog',
			careInfo: {
				bathroom: {
					period: 'Every',
					hours: 7,
					minutes: 0,
				},
				feeding: {
					period: 'Twice Daily',
					hours: 0,
					minutes: 0,
				},
				leftAlone: {
					hours: 6,
					minutes: 0,
				},
				medication: [
					{
						type: 'Pill',
						name: 'Denamarin',
						period: 'Twice Daily',
						info: 'w/food',
					},
				],
				allergies: ['Wheat', 'Water'],
				specialInfo:
					'If left alone, please put on soft, classical music for Lily and make sure she has enough water.',
			},
		},
	},
	ownedLists: {
		0: {
			carePlanName: "Summer '23 Trip",
			link: '',
			info: {
				emergency: {
					contact: {
						name: '',
						contact: '',
					},
				},
				important: {
					sitter: {
						name: 'Graham Campbell',
						contact: '(555)-555-5555',
						img: '',
					},
					vet: {
						locationName: 'Friendly Neighborhood Pet Clinic',
						vetName: 'Peggy Griffin',
						contact: '(555)-555-5555',
					},
					insurance: {
						provider: 'PCI Insurance',
						contact: '(555)-555-5555',
						cert: 'PCI33445',
						effective: '12/21/2022 - 12/21/2023',
					},
				},
			},
			tasks: {
				upcoming: {
					0: {
						title: 'Feed Lily Dinner',
						time: '6:00 pm',
						info: 'Dose 2. Give with food.',
					},
					1: {
						title: 'Liver Medication',
						time: '6:00 pm',
						info: '',
					},
					2: {
						title: 'Evening Walk',
						time: '6:30 pm',
						info: '',
					},
				},
				completed: {
					0: {
						title: 'Feed Lily Breakfast',
						time: '8:00 am',
					},
					1: {
						title: 'Morning Walk',
						time: '8:30 am',
					},
					2: {
						title: 'Afternoon Walk',
						time: '1:30 pm',
					},
				},
			},
			calendar: {
				numOfDays: 7,
				firstDate: 'June 22, 2023',
				lastDate: 'June 29, 2023',
			},
		},
	},
};
