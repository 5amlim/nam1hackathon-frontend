import { createContext, useState } from 'react';
import {
	StageOne,
	StageTwo,
	StageThree,
	StageFour,
	StageFive,
	StageSix,
	StageSeven,
	StageConfirm,
} from '/components/scheduleCreator/stages.jsx';
export const ScheduleContext = createContext({
	scheduleInfo: {},
	setScheduleInfo: () => {},
});
export const InitialCreate = () => {
	const [stage, setStage] = useState(0);
	const [scheduleInfo, setScheduleInfo] = useState({
		info: { emergency: {}, important: {} },
		tasks: {},
		calendar: {
			numOfDays: 0,
		},
	});
	return (
		<>
			<ScheduleContext.Provider value={{ scheduleInfo, setScheduleInfo }}>
				<div className="stages-container">
					{stage >= 0 && <StageOne />}
					{stage >= 1 && <StageTwo />}
					{stage >= 2 && <StageThree />}
					{stage >= 3 && <StageFour />}
					{stage >= 4 && <StageFive />}
					{stage >= 5 && <StageSix />}
					{stage >= 6 && <StageSeven />}
					{stage >= 7 && <StageConfirm />}
				</div>
				{stage < 7 && <button onClick={() => setStage(stage + 1)} />}
			</ScheduleContext.Provider>
		</>
	);
};
