import {
	DateCalendar,
	DateTimeField,
	DateTimePicker,
} from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { InitialCreate } from '../scheduleCreator/initialCreate';
import { CompletedTaskList, TaskList } from './taskList';
import { InfoBox } from './infoBox';
export const Schedule = () => {
	const [dateValue, setValue] = useState();
	useEffect(() => {});
	return (
		<>
			<div className="container">
				<div className="schedule-header row">
					<div className="col">
						<div className="schedule-header-jumbo"></div>
						<h3>Schedule</h3>
					</div>
				</div>
				<div className="row calendar-row">
					<div className="col">
						<DateCalendar fixedWeekNumber={1} showDaysOutsideCurrentMonth />
					</div>
				</div>
				<div className="row schedule-info-row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
					<div className="col">
						<div className="upcoming-task-list task-list">
							<h2>Upcoming</h2>
							<TaskList tasks={[]} />
						</div>
					</div>
					<div className="col">
						<div className="completed-task-list task-list">
							<h2>Completed</h2>
							<CompletedTaskList tasks={[]} />
						</div>
					</div>
					<div className="col">
						{' '}
						<div className="pet-sitter-info-container info-container">
							<h4>Pet Sitter</h4>
							<div className="pet-sitter-info">
								<div className="pet-sitter-contact-photo"></div>
								<div className="pet-sitter-contact-info">
									<h4>Name</h4>
									<h5>Number</h5>
								</div>
								<div className="pet-sitter-contact-button"></div>
							</div>
						</div>
					</div>
					<div className="col">
						{' '}
						<div className="vet-info-container info-container">
							<h4>Vet Info</h4>
							<InfoBox title={'Clinic'} info={'Name'} />
							<InfoBox title={'Vet Name'} info={'Name'} />
							<InfoBox title={'Phone Number'} info={'Name'} />
						</div>
					</div>
					<div className="col">
						<div className="insurance-info-container info-container">
							<h4>Insurance Info</h4>
							<InfoBox title={'Provider'} info={'Name'} />
							<InfoBox title={'Pet Name'} info={'Name'} />
							<InfoBox title={'Claim Report'} info={'Name'} />
							<InfoBox title={'CERT. Number'} info={'Name'} />
							<InfoBox title={'Effective Dates'} info={'Name'} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
