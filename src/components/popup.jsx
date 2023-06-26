import { DateTimePicker } from '@mui/x-date-pickers';
import { InitialCreate } from './scheduleCreator/initialCreate';
export const Popup = () => {
	return (
		<>
			{' '}
			<div className="date-time-box">
				<DateTimePicker
					defaultValue={dayjs('2023')}
					value={dateValue}
					onChange={(newValue) => setValue(newValue)}
				/>
			</div>
			<InitialCreate />
		</>
	);
};
