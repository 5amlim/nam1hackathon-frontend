import { useMemo } from 'react';
import { Data } from '../assets/dummyData';
import { DateCalendar } from '@mui/x-date-pickers';
import {
	TaskList,
	CompletedTaskList,
} from '../components/displaySchedule/taskList';
import { InfoBox } from '../components/displaySchedule/infoBox';
export const SharedSchedule = () => {
	const tasks = useMemo(() => {
		return Data.ownedLists[0].tasks;
	}, []);
	const listInfo = useMemo(() => {
		return Data.ownedLists[0];
	});
	return (
		<>
			<DateCalendar fixedWeekNumber={1} showDaysOutsideCurrentMonth />
			<div className="upcoming-task-list task-list">
				<h2>Upcoming</h2>
				<TaskList tasks={Object.values(tasks.upcoming)} />
			</div>
			<div className="completed-task-list task-list">
				<h2>Completed</h2>
				<CompletedTaskList tasks={Object.values(tasks.completed)} />
			</div>
			<div className="pet-sitter-info-container info-container">
				<h4>Pet Sitter</h4>
				<div className="pet-sitter-info">
					<div className="pet-sitter-contact-photo"></div>
					<div className="pet-sitter-contact-info">
						<h4>{listInfo.info.important.sitter.name}</h4>
						<h5>{listInfo.info.important.sitter.number}</h5>
					</div>
					<div className="pet-sitter-contact-button"></div>
				</div>
			</div>
			<div className="vet-info-container info-container">
				<h4>Vet Info</h4>
				<InfoBox
					title={'Clinic'}
					info={listInfo.info.important.vet.locationName}
				/>
				<InfoBox
					title={'Vet Name'}
					info={listInfo.info.important.vet.vetName}
				/>
				<InfoBox
					title={'Phone Number'}
					info={listInfo.info.important.vet.contact}
				/>
			</div>
			<div className="insurance-info-container info-container">
				<h4>Insurance Info</h4>
				<InfoBox
					title={'Provider'}
					info={listInfo.info.important.insurance.provider}
				/>
				<InfoBox title={'Pet Name'} info={Data.petInfo.name} />
				<InfoBox
					title={'Claim Report'}
					info={listInfo.info.important.insurance.contact}
				/>
				<InfoBox
					title={'CERT. Number'}
					info={listInfo.info.important.insurance.cert}
				/>
				<InfoBox
					title={'Effective Dates'}
					info={listInfo.info.important.insurance.effective}
				/>
			</div>
		</>
	);
};
